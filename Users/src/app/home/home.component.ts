import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ReservationsService } from '../_services/reservations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentNumber=this.authService.decodedToken.studentNumber ;
  studentID=this.authService.decodedToken._id ;
  student;

  constructor(private authService :AuthService ,private route : Router, private reservationervice:ReservationsService) { }

  ngOnInit() {
    this.authService.getUserDetails(this.studentID)
    .subscribe(
     (response)=>{
       this.student=response;
       console.log(response);
     },
       
     (error)=>console.log(error)
   );
  }
  reservationForm(){

    let data;
    this.reservationervice.getAllreservations()
    .subscribe(response=>{
   
      data=response;
      data.forEach(reservation => {
        let Startdate=new Date(reservation.StartTime).getDate();
        let Startmonth=new Date(reservation.StartTime).getMonth();
        let Startyear=new Date(reservation.StartTime).getFullYear();
        let Starthour=new Date(reservation.StartTime).getHours();
        let Startminutes=new Date(reservation.StartTime).getMinutes();

        let Enddate=new Date(reservation.EndTime).getDate();
        let Endmonth=new Date(reservation.EndTime).getMonth();
        let Endyear=new Date(reservation.EndTime).getFullYear();
        let Endhour=new Date(reservation.EndTime).getHours();
        let Endminutes=new Date(reservation.EndTime).getMinutes();


        let startTime=new Date(Startyear,Startmonth,Startdate,Starthour,Startminutes);
        let endTime=new Date(Endyear,Endmonth,Enddate,Endhour,Endminutes);

        reservation.StartTime=startTime;
        reservation.EndTime=endTime;
        // console.log(reservation.StartTime);
        // console.log(reservation.EndTime);
      });
      
      console.log("uweifkgeiuwfhueifhbouh");
      ScheduleComponent.data=data;
      this.route.navigate(['/reservationForm']);
    },(error:Response)=>{   
    })

    
  }

}
