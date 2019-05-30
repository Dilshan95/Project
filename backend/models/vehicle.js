const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    VehicleType:{
        type:String,
        required:true,
    },
    // RegNo:{
    //     type:String,
    //     required:true,
    // },
    // EngineNo:{
    //     type:String,
    //     required:true,
    // },
    // ChassisNo:{
    //     type:String,
    //     required:true,
    // },
    // NoofSeats:{
    //     type:Number,
    //     required:true,
    // },
    // FuelType:{
    //     type:String,
    //     required:true,
    // },
    // ManufactureYear:{
    //     type:Number,
    //     required:true,
    // },
    // RegistrationDate:{
    //     type:Date,
    //     required:true
    // },
    // Institute:{
    //     type:String,
    //     required:true
    // }
});

const Vehicle = mongoose.model('vehicle',vehicleSchema);


exports.Vehicle = Vehicle; 
exports.vehicleSchema = vehicleSchema;