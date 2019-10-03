import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../_services/reservations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-deanApproval',
  templateUrl: './deanApproval.component.html',
  styleUrls: ['./deanApproval.component.css']
})
export class DeanApprovalComponent implements OnInit {
  reservationId:any;
  reservation:any;
  reservationSend:any;
  DeanMail:any;
  constructor(private route:ActivatedRoute, private reservationsService:ReservationsService, private router:Router, private dialogService:DialogService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
        this.reservationId=params.get('reservationId');
        console.log(this.reservationId);


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

},
  error=>{
    alert('An unexpected error occurred.');
    console.log(error);
});
    })

  }


  approveReservation(){

    this.dialogService.openConfirmDialog('Confirm Reservation?')
  .afterClosed().subscribe(res =>{
    console.log(res);
    if(res){
    
    this.reservation.DeanConfirmation=true;
    console.log(this.reservation);

     this.reservationsService.updateReservationConfirmation(this.reservation).subscribe(next=>{
      
        this.dialogService.openMessageDialog('Succesfully confirmed');
        // this.router.navigate(['/dean']);
      },(error:Response)=>{
        
        if(error.status===400){
          alert('Reservation not exist.')
          console.log(error);
        }
        else alert('Unexpected error found');
      }) 


}
});
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
    // this.reservation.splice(i,1)
    this.dialogService.openMessageDialog('Reservation is cancelled');
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
