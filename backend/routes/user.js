const {User} = require ('../models/user');
const express = require ('express');
const router = express.Router();
const bcrypt=require('bcrypt')

router.post('/', async(req, res)=>{

    const user = await User.findOne({  _id: req.body._id,});

    if (user) return res.status(400).send('User already exists.');
     
    const passwordSalt=await bcrypt.genSalt(10);
    const passwordHash=await bcrypt.hash(req.body.Password,passwordSalt);

    let createUser = new User ({
        _id: req.body._id,
        Name: req.body.Name,
        NICNo: req.body.NICNo,
        Password: passwordHash,
        PhoneNumber: req.body.PhoneNumber,
        Address:req.body.Address
    });
    createUser=await createUser.save();
    res.send(createUser);
})

router.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user);
  });
module.exports = router; 