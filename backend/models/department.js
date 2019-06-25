const mongoose = require('mongoose');

const {Faculty}=require('./faculty');

const departmentSchema = new mongoose.Schema({
    _id:{
       type:String,
       required:true,
   },
   Name:{
       type:String,
       required:true,
   },
   HODName:
    {
        type:String,
        required:true
    },
    HODMail:
    {
        type:String,
        required:true
    },
    HODPhoneNumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10    
    }, 
    faculty:{
        type:String,
        ref:Faculty,
       }
});
  

const Department = mongoose.model('department',departmentSchema);


exports.Department = Department; 
exports.departmentSchema = departmentSchema;