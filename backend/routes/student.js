const {Student} = require ('../models/student');
const express = require ('express');
const router = express.Router();
const bcrypt=require('bcrypt')

router.post('/', async(req, res)=>{

    const student = await Student.findOne({  _id: req.body._id,});

    if (student) return res.status(400).send('User already exists.');
     
    const passwordSalt=await bcrypt.genSalt(10);
    const passwordHash=await bcrypt.hash(req.body.Password,passwordSalt);

    let createStudent = new Student ({
        _id: req.body._id,
        StudentID: req.body.StudentID,
        Name: req.body.Name,
        Password: passwordHash,
        Mail: req.body.Mail,
        department:req.body.department
    });
    createStudent=await createStudent.save();
    res.send(createStudent);
})

router.get('/', async (req, res) => {
    const student = await Student.find();
    res.send(student);
  });
  
  router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id).populate({path:'department',populate:{path:'faculty'}});
    if (!student) return res.status(404).send('student was not found.');
  
    res.send(student);
  });
module.exports = router; 