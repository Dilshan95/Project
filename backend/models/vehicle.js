const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
    VehicleType:{
        type:String,
    },
    RegNo:{
        type:String,
    },
    EngineNo:{
        type:String,
    },
    ChassisNo:{
        type:String,
    },
    NoofSeats:{
        type:Number,
    },
    FuelType:{
        type:String,
    },
    ManufactureYear:{
        type:Number,
    },
    RegistrationDate:{
        type:Date,
    },
    Institute:{
        type:String,
    }
});

const Vehicle = mongoose.model('vehicle',vehicleSchema);


exports.Vehicle = Vehicle; 
exports.vehicleSchema = vehicleSchema;