const {User} = require ('../models/user');
const jwt=require('jsonwebtoken');
const express = require('express');
const bcrypt=require('bcrypt')
const router = express.Router();

router.post('/', async(req, res)=>{
    const user = await User.findOne({_id: req.body._id,});
    if (!user) return res.status(400).send('Inavlid user.');
    
    const valid=await  bcrypt.compare( req.body.Password,user.Password);
    if(!valid)return res.status(400).send('Inavlid password .');
    
    const token=jwt.sign({id:user._id},'UokStudentsKey');

    const tokenTosend={
        token:token
    }
    res.send(tokenTosend);
    

})


module.exports = router; 