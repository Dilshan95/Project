const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    _id:{
       type:String,
       required:true,
   },
   Name:{
       type:String,
       required:true,
   },
   DeanName:
    {
        type:String,
        required:true
    },
    DeanMail:
    {
        type:String,
        required:true
    },
    DeanPhoneNumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10    
    }
});
  

const Faculty = mongoose.model('faculty',facultySchema);


exports.Faculty = Faculty; 
exports.facultySchema = facultySchema;