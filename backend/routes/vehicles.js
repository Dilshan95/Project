const {Vehicle} = require ('../models/vehicle');
const express = require ('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    let createVehicle = new Vehicle ({
        _id: req.body._id,
        VehicleType: req.body.VehicleType
        // RegNo: req.body.RegNo,
        // EngineNo: req.body.EngineNo,
        // ChassisNo: req.body.ChassisNo,
        // NoofSeats:req.body.NoofSeats,
        // FuelType:req.body.FuelType,
        // ManufactureYear:req.body.ManufactureYear,
        // RegistrationDate: req.body.RegistrationDate,
        // Institute:req.body.Institute
    });
    res.send(createVehicle);
})

router.get('/', async (req, res) => {
    const vehicle = await Vehicle.find();
    res.send(vehicle);
  });
module.exports = router; 








