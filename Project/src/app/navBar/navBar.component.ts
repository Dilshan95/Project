import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route : Router,private dialogService:DialogService ) { }

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

  logout(){


    this.dialogService.openConfirmDialog('Are you sure you want to log out?')
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
      
        localStorage.removeItem('token');
        this.route.navigate(['']);
   }
  });  
  }

}
