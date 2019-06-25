const mongoose = require('mongoose');
const {Department}=require('./department');

const studentSchema = new mongoose.Schema({
    _id:{
       type:String,
       required:true,
    },
   StudentID:{
    type:String,
    required:true,
    },
   Name:{
       type:String,
       required:true,
    },
   Password:
    {
        type:String,
        required:true
    },
    Mail:
    {
        type:String,
        required:true
    },
    department:{
        type:String,
        ref:Department,
    }
    
});
  

const Student = mongoose.model('student',studentSchema);


exports.Student = Student; 
exports.studentSchema = studentSchema;