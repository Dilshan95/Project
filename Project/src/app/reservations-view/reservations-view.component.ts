import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { DialogService } from '../_services/dialog.service';
import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-reservations-view',
  templateUrl: './reservations-view.component.html',
  styleUrls: ['./reservations-view.component.css']
})
export class ReservationsViewComponent implements OnInit {

  reservationId:any;
  reservation:any;
  vehicleID:any;
  data:any;
  driverName:any;
  driverPhoneNumber:any;
  constructor(private reservationsService:ReservationsService,private route:ActivatedRoute, private router:Router, 
    private dialogService:DialogService, private vehicleService:VehicleService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
        this.reservationId=params.get('reservationId');
        console.log(this.reservationId);
    })
    
this.reservationsService.getOneReservation(this.reservationId)
.subscribe(
  response=>{
    console.log(response);
     this.reservation=response;
   
     this.reservation.StartDate=new Date(this.reservation.StartTime).toDateString();
     this.reservation.EndDate=new Date(this.reservation.EndTime).toDateString();
     
     this.reservation.StartHour=new Date(this.reservation.StartTime).getHours();
     this.reservation.EndHour=new Date(this.reservation.EndTime).getHours();

     this.reservation.StartMin=new Date(this.reservation.StartTime).getMinutes();
     if( this.reservation.StartMin==0){
      this.reservation.StartMinnew=this.reservation.StartMin+'0';
     } else{
      this.reservation.StartMinnew=this.reservation.StartMin;
     }
     this.reservation.EndMin=new Date(this.reservation.EndTime).getMinutes();
     if( this.reservation.EndMin==0){
      this.reservation.EndMinnew=this.reservation.EndMin+'0';
     } else{
      this.reservation.EndMinnew=this.reservation.EndMin;
     }

     this.vehicleID=this.reservation.Vehicle._id;
console.log(this.vehicleID);

this.vehicleService.getDriver(this.vehicleID)
.subscribe(
  response=>{
    console.log(response);
    this.data=response;
this.driverName=this.data[0].Name;
this.driverPhoneNumber=this.data[0].PhoneNumber;
console.log(this.driverName);
    },
  error=>{
    alert('An unexpected error occurred.');
    console.log(error);
});
},
  error=>{
    alert('An unexpected error occurred.');
    console.log(error);
});

  }

  approveReservation(){


    this.dialogService.openConfirmDialog('Confirm Reservation?')
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
      
        this.reservation.ReservationConfirmation=1;
        console.log(this.reservation);
  
         this.reservationsService.updateReservationConfirmation(this.reservation).subscribe(next=>{
            this.dialogService.openMessageDialog('Succesfully confirmed');
            this.router.navigate(['/home']);
          },(error:Response)=>{
            
            if(error.status===400){
              alert('Reservation not exist.')
              console.log(error);
            }
            else alert('Unexpected error found');
          }) 
  
  
   }
  });

//     this.dialogService.openConfirmDialog('Confirm Reservation?')
//     .afterClosed().subscribe(res =>{
//       console.log(res);
//       if(res){
    
//     this.reservation.ReservationConfirmation=1;
//     console.log(this.reservation);

//      this.reservationsService.updateReservationConfirmation(this.reservation).subscribe(next=>{
//         this.dialogService.openMessageDialog('Succesfully confirmed');
//         this.router.navigate(['/home']);
//       },(error:Response)=>{
        
//         if(error.status===400){
//           alert('Reservation not exist.')
//           console.log(error);
//         }
//         else alert('Unexpected error found');
//       }) 



// });
// }
  }


  cancelReservation(reservation){

    this.dialogService.openConfirmDialog('Are you sure you want to cancel the reservation?')
  .afterClosed().subscribe(res =>{
    console.log(res);
    if(res){

    this.reservationsService.deleteReservation(this.reservationId)
    .subscribe(
      response=>{
      console.log(response)
      this.dialogService.openMessageDialog('Reservation is cancelled');
      this.router.navigate(['/home']);
      
   },
      (error: Response)=>{
        if(error.status===404)
        alert('This Reservation is Already Deleted');
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
     
  })
}
});
  }


}
