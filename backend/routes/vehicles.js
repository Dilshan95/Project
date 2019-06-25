const {Vehicle} = require ('../models/vehicle');
const express = require ('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    const vehicle = await Vehicle.findById({_id:req.body._id});
    if(vehicle) return res.status(400).send('Vehicle ID exists');
    let createVehicle = new Vehicle ({
        _id: req.body._id,
        VehicleType: req.body.VehicleType,
        RegNo: req.body.RegNo,
        EngineNo: req.body.EngineNo,
        ChassisNo: req.body.ChassisNo,
        NoofSeats:req.body.NoofSeats,
        FuelType:req.body.FuelType,
        ManufactureYear:req.body.ManufactureYear,
        RegistrationDate: req.body.RegistrationDate,
        Institute:req.body.Institute
    });
    createVehicle=await createVehicle.save();
    res.send(createVehicle);
})

router.get('/', async (req, res) => {
    // const vehicle = await Vehicle.find();
    let vehicle =await Vehicle.aggregate([
        {
            $project:{
                VehicleType:1,
                RegNo:1,
                EngineNo:1,
                ChassisNo:1,
                NoofSeats:1,
                FuelType:1,
                ManufactureYear:1,
                RegistrationDate:{ $dateToString: { format: "%Y-%m-%d", date: "$RegistrationDate" } },
                Institute:1,
            }
        },
    ]);
    res.send(vehicle);
  });

  router.get('/:id', async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).send('Vehicle was not found.');
  
    res.send(vehicle);
  });

  router.put('/:id',async (req, res) => {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id,
      { 
        VehicleType: req.body.VehicleType,
        RegNo: req.body.RegNo,
        EngineNo: req.body.EngineNo,
        ChassisNo:req.body.ChassisNo,
        NoofSeats:req.body.NoofSeats,
        FuelType:req.body.FuelType,
        ManufactureYear:req.body.ManufactureYear,
        RegistrationDate:req.body.RegistrationDate,
        Institute:req.body.Institute,
      }, { new: true });
  
    if (!vehicle) return res.status(404).send('The vehicle with the given ID was not found.');
    res.send(vehicle);
    });

module.exports = router; 







