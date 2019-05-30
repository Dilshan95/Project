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
    Password:{
        type:String,
        required:true,
    },
    Department:{
        type:String,
        required:true,
    },  
    Faculty:{
        type:String,
        required:true,
    } 
});

const User = mongoose.model('user',userSchema);

exports.User = User;