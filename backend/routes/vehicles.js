const {Vehicle} = require ('../models/vehicle');
const express = require ('express');
const router = express.Router();
const {Driver} = require ('../models/driver');


router.post('/', async(req, res)=>{
    const vehicle = await Vehicle.findById({_id:req.body._id});
    if(vehicle) return res.status(400).send('Vehicle ID exists');
    let createVehicle = new Vehicle ({
        _id: req.body._id,
        VehicleType: req.body.VehicleType,
        // RegNo: req.body.RegNo,
        EngineNo: req.body.EngineNo,
        ChassisNo: req.body.ChassisNo,
        NoofSeats:req.body.NoofSeats,
        FuelType:req.body.FuelType,
        ManufactureYear:req.body.ManufactureYear,
        RegistrationDate: req.body.RegistrationDate,
        Institute:req.body.Institute,
        HasADriver:req.body.HasADriver
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
                // RegNo:1,
                EngineNo:1,
                ChassisNo:1,
                NoofSeats:1,
                FuelType:1,
                ManufactureYear:1,
                RegistrationDate:{ $dateToString: { format: "%Y-%m-%d", date: "$RegistrationDate" } },
                Institute:1,
                HasADriver:1,
            }
        },
    ]);
    res.send(vehicle);
  });
  
  router.get('/type', async (req, res) => {
    let vehicleTypeQuery=req.query.vehicleType;
    let vehicles =await Vehicle.aggregate([
        {$match:{VehicleType: vehicleTypeQuery}},
        {
            $project:{
                VehicleType:1,
                // RegNo:1,
                EngineNo:1,
                ChassisNo:1,
                NoofSeats:1,
                FuelType:1,
                ManufactureYear:1,
                RegistrationDate:{ $dateToString: { format: "%Y-%m-%d", date: "$RegistrationDate" } },
                Institute:1,
                HasADriver:1,
            }
        },
    ]);
    res.send(vehicles);
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
        // RegNo: req.body.RegNo,
        EngineNo: req.body.EngineNo,
        ChassisNo:req.body.ChassisNo,
        NoofSeats:req.body.NoofSeats,
        FuelType:req.body.FuelType,
        ManufactureYear:req.body.ManufactureYear,
        RegistrationDate:req.body.RegistrationDate,
        Institute:req.body.Institute,
        HasADriver:req.body.HasADriver

      }, { new: true });
  
    if (!vehicle) return res.status(404).send('The vehicle with the given ID was not found.');
    res.send(vehicle);
    });





    router.get('/searchVehice/ById', async (req, res) => {
      let vehicleNumberPattern=req.query.id;
      pattern= new RegExp(vehicleNumberPattern,"i");
    
        const vehicle = await Vehicle.find({_id:pattern,HasADriver:false});
        res.send(vehicle);
      });



      router.get('/driverNotAssigned/false/available', async (req, res) => {
        const vehicle = await Vehicle.find({HasADriver:false});
      
        res.send(vehicle);
      });


      router.get('/getDriver/find/vehicle/driver/findDriver', async (req, res) => {
        const vehicle = await Driver.find({vehicle:req.query.vehicle}).populate('vehicle');
        if (!vehicle) return res.status(404).send('Vehicle was not found.');
      
        res.send(vehicle);
      });

      router.delete('/:id',async (req, res) => {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
          if (!vehicle) return res.status(404).send('The Vehicle with the given Reg No was not found.');
          res.send(vehicle);
        
        });

module.exports = router; 







