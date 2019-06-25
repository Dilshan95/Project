import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentNumber=this.authService.decodedToken.studentNumber ;
  studentID=this.authService.decodedToken._id ;
  student;

  constructor(private authService :AuthService ,private route : Router) { }

  ngOnInit() {
    this.authService.getUserDetails(this.studentID)
    .subscribe(
     (response)=>{
       this.student=response;
       console.log(response);
       // console.log(this.policeStationId);
     },
       
     (error)=>console.log(error)
   );
  }
  reservationForm(){
    this.route.navigate(['/reservationForm']);
  }

}
