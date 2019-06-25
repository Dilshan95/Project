const {Department} = require ('../models/department');
const express = require ('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    let createDepartment = new Department ({
        _id: req.body._id,
        Name: req.body.Name,
        HODName: req.body.HODName,
        HODMail: req.body.HODMail,
        HODPhoneNumber: req.body.HODPhoneNumber,
        faculty:req.body.FacultyID
    });
    createDepartment=await createDepartment.save();
    res.send(createDepartment);
})

router.get('/', async (req, res) => {
    const department = await Department.find().populate('faculty');
    res.send(department);
  });

  

  router.get('/:id', async (req, res) => {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).send('Department was not found.');
  
    res.send(department);
  });

  router.put('/:id',async (req, res) => {
    const department = await Department.findByIdAndUpdate(req.params.id,
      { 
        Name: req.body.Name,
        HODName: req.body.HODName,
        HODMail: req.body.HODMail,
        HODPhoneNumber:req.body.HODPhoneNumber,
      }, { new: true });
  
    if (!department) return res.status(404).send('The department with the given ID was not found.');
    res.send(department);
    });
module.exports = router; 