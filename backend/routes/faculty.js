const {Faculty} = require ('../models/faculty');
const express = require ('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    let createFaculty = new Faculty ({
        _id: req.body._id,
        Name: req.body.Name,
        DeanName: req.body.DeanName,
        DeanMail: req.body.DeanMail,
        DeanPhoneNumber: req.body.DeanPhoneNumber,
    });
    createFaculty=await createFaculty.save();
    res.send(createFaculty);
})

router.get('/', async (req, res) => {
    const faculty = await Faculty.find();
    res.send(faculty);
  });

  router.get('/:id', async (req, res) => {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) return res.status(404).send('Faculty was not found.');
  
    res.send(faculty);
  });

  router.put('/:id',async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id,
      { 
        Name: req.body.Name,
        DeanName: req.body.DeanName,
        DeanMail: req.body.DeanMail,
        DeanPhoneNumber:req.body.DeanPhoneNumber,
      }, { new: true });
  
    if (!faculty) return res.status(404).send('The faculty with the given ID was not found.');
    res.send(faculty);
    });
module.exports = router; 







