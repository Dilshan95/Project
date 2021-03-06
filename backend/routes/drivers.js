const {Driver} = require ('../models/driver');
const {Vehicle} = require ('../models/vehicle');
const {Reservation} = require ('../models/reservation');
const express = require ('express');
const router = express.Router();

router.post('/', async(req, res)=>{
  const driver = await Driver.findById({_id:req.body._id});
    if(driver) return res.status(400).send('Driver exists');
    let createDriver = new Driver ({
        _id: req.body._id,
        Name: req.body.Name,
        VehicleType: req.body.VehicleType,
        PhoneNumber: req.body.PhoneNumber,
        Address: req.body.Address,
        DateOfBirth:req.body.DateOfBirth,
        vehicle:req.body.Vehicle
    });

    createDriver=await createDriver.save();

    const vehicle = await Vehicle.findByIdAndUpdate(req.body.Vehicle,
      { 
        HasADriver: true,

      }, { new: true });
    res.send(createDriver);
})

router.get('/', async (req, res) => {
    let driver =await Driver.aggregate([
        {
            $project:{
                VehicleType:1,
                Name:1,
                PhoneNumber:1,
                Address:1,
                DateOfBirth: { $dateToString: { format: "%Y-%m-%d", date: "$DateOfBirth" } },
                vehicle:1,
 
            }
        },
    ]);
    res.send(driver);
  });
  router.get('/getReservations/all', async (req, res) => {
    let vehicle=req.query.vehicle;
    let driver =await Driver.aggregate([
        {
            $project:{
                VehicleType:1,
                Name:1,
                PhoneNumber:1,
                Address:1,
                DateOfBirth: { $dateToString: { format: "%Y-%m-%d", date: "$DateOfBirth" } },
                vehicle:1,
 
            }
        },
    ]);
    const reservations = await Reservation.find({Vehicle:vehicle}).populate('Vehicle');
    let data={
      driverData:driver,
      reservationsData:reservations
    }
    res.send(data);
  });

  router.get('/:id', async (req, res) => {
    const driver = await Driver.findById(req.params.id).populate('vehicle');
    if (!driver) return res.status(404).send('Driver was not found.');
  
    res.send(driver);
  });

  router.put('/:id',async (req, res) => {
    const driver = await Driver.findByIdAndUpdate(req.params.id,
      { 
        Name: req.body.Name,
        PhoneNumber: req.body.PhoneNumber,
        Address: req.body.Address,
        DateOfBirth:req.body.DateOfBirth,
      }, { new: true });
  
    if (!driver) return res.status(404).send('The driver with the given ID was not found.');
    res.send(driver);
    });

    router.delete('/:id',async (req, res) => {
      const driver = await Driver.findByIdAndDelete(req.params.id);
        if (!driver) return res.status(404).send('The Driver with the given name was not found.');
        res.send(driver);
      
      });


module.exports = router; 