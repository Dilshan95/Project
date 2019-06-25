import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  reservations(){
    this.route.navigate(['/home']);
  }
  
  vehicles(){
    this.route.navigate(['/Vehicles']);
  }

  drivers(){
    this.route.navigate(['/Drivers']);
  }

  incumbent(){
    this.route.navigate(['/Incumbent']);
  }

  // logOut(){
  //   localStorage.removeItem('token');
  //   this.route.navigate(['/login']);
  // }



}
