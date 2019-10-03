import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../_services/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Reservations',
  templateUrl: './Reservations.component.html',
  styleUrls: ['./Reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  confirmedreservations:any;
  pendingreservations:any;
  constructor(private reservationsService:ReservationsService,private router:Router) {
    this.viewReservations();
    this.confirmedReservations();
    this.pendingReservations();
   }
  ngOnInit() {
  }

  viewReservations(){
    this.reservationsService.getReservation()
      .subscribe(
        response=>{
          console.log(response);
           this.reservations=response;
           this.reservations.forEach(reservation => {
            reservation.StartDay=new Date(reservation.StartTime).toDateString();
  
            reservation.EndDay=new Date(reservation.EndTime).toDateString();
         
          });
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }



    confirmedReservations(){
      this.reservationsService.getConfirmedReservation()
      .subscribe(
        response=>{
          console.log(response);
           this.confirmedreservations=response;
           this.confirmedreservations.forEach(reservation => {
            reservation.StartDay=new Date(reservation.StartTime).toDateString();
  
            reservation.EndDay=new Date(reservation.EndTime).toDateString();
         
          });
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }


    pendingReservations(){
      this.reservationsService.getPendingReservation()
      .subscribe(
        response=>{
          console.log(response);
           this.pendingreservations=response;
           this.pendingreservations.forEach(reservation => {
            reservation.StartDay=new Date(reservation.StartTime).toDateString();
  
            reservation.EndDay=new Date(reservation.EndTime).toDateString();
         
          });
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    viewReservation(reservation){
      console.log(reservation._id)
      this.router.navigate(['/viewReservation',reservation._id]);
    }

}

