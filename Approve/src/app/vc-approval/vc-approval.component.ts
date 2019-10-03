import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-vc-approval',
  templateUrl: './vc-approval.component.html',
  styleUrls: ['./vc-approval.component.css']
})
export class VcApprovalComponent implements OnInit {
  reservationId:any;
  reservation:any;
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

}
