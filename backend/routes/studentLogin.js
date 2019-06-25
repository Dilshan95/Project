const {Student} = require ('../models/student');
const jwt=require('jsonwebtoken');
const express = require('express');
const bcrypt=require('bcrypt')
const router = express.Router();

router.post('/', async(req, res)=>{
    const student = await Student.findOne({_id: req.body._id,});
    if (!student) return res.status(400).send('Inavlid student.');
    
    const valid=await  bcrypt.compare( req.body.Password,student.Password);
    if(!valid)return res.status(400).send('Inavlid password .');
    
    const token=jwt.sign({id:student._id},'UokStudentsKey');

    const tokenTosend={
        token:token
    }
    res.send(tokenTosend);
    

})


module.exports = router; 