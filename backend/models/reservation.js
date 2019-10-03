const mongoose = require('mongoose');
const {Department}=require('./department');
const {Student}=require('./student');
const {Vehicle}=require('./vehicle');

const reservationSchema = new mongoose.Schema({
    _id:{
       type:Number,
       required:true,
    },
    EndTime:
    {
        type:Date
    },
    StartTime:
    {
        type:Date
    },
   From:{
    type:String,
    
    },
   To:{
       type:String,
       
    },
   Distance:
    {
        type:String,
       
    },
    Vehicle:
    {
        type:String,
       ref:Vehicle
    },
    Purpose:
    {
        type:String,
        
    },
    Passengers:
    {
        type:Number,
        
    },
    PhoneNumber:
    {
        type:Number,
      
    },
    Lecturer:
    {
        type:String,
        
    },
    Description:
    {
        type:String,
      
    },
    HODConfirmation:
    {
        type:Boolean
    },
    DeanConfirmation:
    {
        type:Boolean
    },
    VCConfirmation:
    {
        type:Boolean
    },
    ReservationConfirmation:
    {
        type:Boolean
    },
    student:{
        type:String,
        ref:Student,
    },
    NewReservation:
    {
        type:Boolean
    }   

});
  

const Reservation = mongoose.model('reservation',reservationSchema);


exports.Reservation = Reservation; 
exports.reservationSchema = reservationSchema;