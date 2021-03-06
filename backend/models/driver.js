const mongoose = require('mongoose');

const {Vehicle}=require('./vehicle');

const driverSchema = new mongoose.Schema({
    _id:{
       type:String,
       required:true,
   },
   Name:{
       type:String,
       required:true,
   },
   VehicleType:
    [{
        type:String,
        required:true
    }],
    vehicle:{
        type:String,
        ref:Vehicle,
       },
    

    PhoneNumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10    
    },
    Address:{
        type:String,
        required:true,
   },
   DateOfBirth:{
    type:Date,
    required:true,
   }
});
  

const Driver = mongoose.model('driver',driverSchema);


exports.Driver = Driver; 
exports.driverSchema = driverSchema;
