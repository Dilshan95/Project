import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,  Router } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { DialogService } from '../_services/dialog.service';


@Component({
  selector: 'app-hodApproval',
  templateUrl: './hodApproval.component.html',
  styleUrls: ['./hodApproval.component.css']
})
export class HodApprovalComponent implements OnInit {
  reservationId:any;
  reservation:any;
  reservationSend:any;
  DeanMail:any;
  stuData:any;
  facultyData:any;
  studentID:any;
  constructor(private route:ActivatedRoute, private reservationsService:ReservationsService, private router:Router, private dialogService:DialogService ) { }

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
    this.getStudent();
  
 }
 approveReservation(){

//   this.dialogService.openConfirmDialog('Confirm Reservation?')
//   .afterClosed().subscribe(res =>{
//     console.log(res);
//     if(res){
    
//       this.reservation.HODConfirmation=1;
//       console.log(this.reservation);

//        this.reservationsService.updateReservationConfirmation(this.reservation).subscribe(next=>{
//           this.dialogService.openMessageDialog('Succesfully confirmed');
//           this.router.navigate(['/dean']);
//         },(error:Response)=>{
          
//           if(error.status===400){
//             alert('Reservation not exist.')
//             console.log(error);
//           }
//           else alert('Unexpected error found');
//         }) 


//  }
// });


this.dialogService.openConfirmDialog('Confirm Reservation?')
.afterClosed().subscribe(res =>{
  console.log(res);
  if(res){
  
    this.reservation.HODConfirmation=true;
    console.log(this.reservation);

     this.reservationsService.updateReservationConfirmation(this.reservation).subscribe(next=>{
      this.reservationSend=next;
      let email={
        emailAddress:this.DeanMail,
        url:"http://localhost:4202/dean/"+this.reservationSend._id,
      }
      this.reservationsService.sendEmail(email)
      .subscribe(
        response=>{
          console.log(response);       
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
          
      })

      console.log(next);
      console.log(email);
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


getStudent(){
  
this.reservationsService.getOneReservation(this.reservationId)
.subscribe(
  response=>{
    // console.log(this.reservationId);
    this.stuData=response;
    this.studentID = this.stuData.student;
    console.log(this.studentID._id);
    this.getDeanMail();
    },
    error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  });
}

getDeanMail(){
  this.reservationsService.getDeanMail(this.studentID)
  .subscribe(
    response=>{
      this.facultyData=response;
      this.DeanMail = this.facultyData.department.faculty.DeanMail;
      console.log(this.DeanMail);
      },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    });
}

cancelReservation(reservation){

  this.dialogService.openConfirmDialog('Are you sure?')
.afterClosed().subscribe(res =>{
  console.log(res);
  if(res){

  this.reservationsService.deleteReservation(this.reservationId)
  .subscribe(
    response=>{
    console.log(response)
    // this.reservation.splice(i,1)
    this.dialogService.openMessageDialog('Succesfully deleted');
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