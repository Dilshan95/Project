const {Reservation} = require ('../models/reservation');
const {Student} = require ('../models/student');
const {Counter} = require ('../models/counters');
const express = require ('express');
const router = express.Router();
const {Vehicle}=require('../models/vehicle');

router.post('/', async(req, res)=>{
    const student = await Student.findById({_id:req.body.student});
    if(!student) return res.status(400).send('Student does not exists');
    let counter=await Counter.findOneAndUpdate({ "name" : "Reservation" },{ $inc: { "value" : 1 } });
console.log(counter);
    let createReservation = new Reservation ({
        _id:counter.value+1,
        EndTime: new Date(req.body.EndTime),
        StartTime:new Date(req.body.StartTime),
        From: req.body.From,
        To: req.body.To,
        Distance:req.body.Distance,
        Purpose:req.body.Purpose,
        Vehicle:req.body.Vehicle,
        Passengers:req.body.Passengers,
        PhoneNumber: req.body.PhoneNumber,
        Lecturer:req.body.Lecturer,
        Description:req.body.Description,
        HODConfirmation:req.body.HODConfirmation,
        DeanConfirmation:req.body.DeanConfirmation,
        VCConfirmation:req.body.VCConfirmation,
        ReservationConfirmation:req.body.ReservationConfirmation,
        student:req.body.student,
        NewReservation:req.body.NewReservation,   
    });
    createReservation=await createReservation.save();

    let reservationSend=await Reservation.find({_id:createReservation._id}).populate();
    res.send(createReservation);
});

router.get('/', async (req, res) => {
    let vehicleTypeQuery=req.query.vehicleNo;
    const reservation =await Reservation.aggregate([
        {$match:{Vehicle: vehicleTypeQuery}},
    ]);
    
    res.send(reservation);
  });


  router.get('/confirmedReservations', async (req, res) => {
    
    const reservation = await Reservation.find({ReservationConfirmation:true}).populate('Vehicle');
    
    res.send(reservation);
  });
  
  router.get('/pendingReservations', async (req, res) => {
    const reservation = await Reservation.find({ReservationConfirmation:false}).populate('Vehicle');
  
    res.send(reservation);
  });


  router.get('/all', async (req, res) => {
    const reservation = await Reservation.find().populate('Vehicle');
    res.send(reservation);
  });
  router.get('/:id', async (req, res) => {
    const reservation = await Reservation.findById(req.params.id).populate('student').populate('Vehicle');
    res.send(reservation);
  });
  router.get('/studentReservations/student', async (req, res) => {
    let studentIdquery=req.query.studentId;
    const reservation = await Reservation.find({student:studentIdquery}).populate('Vehicle');
    res.send(reservation);
  });



  router.put('/:id',async (req, res) => {
    let id=req.params.id.toString();
    const reservation = await Reservation.findByIdAndUpdate(id,
      { 
        HODConfirmation: req.body.HODConfirmation,
        DeanConfirmation: req.body.DeanConfirmation,
        ReservationConfirmation: req.body.ReservationConfirmation,

      }, { new: true });
  
    res.send(reservation);
    });









    router.post('/check', async (req, res) => {  
      let EndTime=new Date(req.body.EndTime).getTime();
      let StartTime=new Date(req.body.StartTime).getTime();
      let vehicleType=req.body.vehicleType;
  
      let reservationDetailsToSend={
          availablity:true,
          vehicles:[]
      };
  
      const vehicles=await Vehicle.find({VehicleType:vehicleType});
      reservationDetailsToSend.vehicles=vehicles;
      const reservations = await Reservation.find().populate('Vehicle');
      let noOfVehiclesInType=vehicles.length;
      let x=0;
  
      reservations.forEach(reservation=>{
          if(reservation.Vehicle.VehicleType==vehicleType){
              let reservationStartTime=reservation.StartTime.getTime();
              let reservationEndTime=reservation.EndTime.getTime();
              if(reservationStartTime==StartTime){
                  x++;
                  let index =reservationDetailsToSend.vehicles.findIndex(vehicle=>vehicle._id==reservation.Vehicle._id);
                  if(index>-1){
                    reservationDetailsToSend.vehicles.splice(index,1);
                  }
                  // reservationDetailsToSend.vehicles.push(reservation.Vehicle);
              }
              else if(reservationStartTime<StartTime&&reservationEndTime>StartTime){
                  x++;
                  let index =reservationDetailsToSend.vehicles.findIndex(vehicle=>vehicle._id==reservation.Vehicle._id);
                  if(index>-1){
                    reservationDetailsToSend.vehicles.splice(index,1);
                  }
              }
              else if(reservationStartTime>StartTime&&reservationStartTime<EndTime){
                  x++;
                  let index =reservationDetailsToSend.vehicles.findIndex(vehicle=>vehicle._id==reservation.Vehicle._id);
                  if(index>-1){
                    reservationDetailsToSend.vehicles.splice(index,1);
                  }
              }
          }     
      })
      if(x>=noOfVehiclesInType){reservationDetailsToSend.availablity=false}
      res.send(reservationDetailsToSend);
  });

  router.delete('/:id',async (req, res) => {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
      if (!reservation) return res.status(404).send('The Reservation with the given ID was not found.');
      res.send(reservation);
    
    });

  
module.exports = router; 







