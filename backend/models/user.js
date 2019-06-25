const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    },
    NICNo:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
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
});

const User = mongoose.model('user',userSchema);

exports.User = User;