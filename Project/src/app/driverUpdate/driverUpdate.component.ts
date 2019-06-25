import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { DriverService } from '../_services/driver.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-driverUpdate',
  templateUrl: './driverUpdate.component.html',
  styleUrls: ['./driverUpdate.component.css']
})
export class DriverUpdateComponent implements OnInit {
  static driverId;
  driver:any;
  changedDriver:any;
  DriverForm=new FormGroup(
    { _id: new FormControl(''),
    Name: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Address: new FormControl(''),
    DateOfBirth: new FormControl(''),
  }
  );


  constructor(private dialogRef:MatDialogRef<DriverUpdateComponent>,private driverService:DriverService,private router:Router) { }

  ngOnInit() {
    
    console.log(DriverUpdateComponent.driverId);
    this.driverService.getOneDriver(DriverUpdateComponent.driverId)
    .subscribe(response=>{
      console.log(response);
      this.populateForm(response);
    },(error:Response)=>{   
    })
  }
  close(){
    this.dialogRef.close();
  }

  populateForm(driver) {
   this.DriverForm.setValue({
    _id:driver._id,
    Name:driver.Name,
    PhoneNumber:driver.PhoneNumber,
    Address:driver.Address,
    DateOfBirth:driver.DateOfBirth
   })
 }

 updateDriver(){
   this.changedDriver=Object.assign({},this.DriverForm.value);
   console.log(this.changedDriver)
   this.driverService.updateDriver(this.changedDriver,DriverUpdateComponent.driverId)
   .subscribe(
    response=>{
    console.log(response);
    this.dialogRef.close();
    
  },
    error=>{
    alert('An unexpected error occurred.');
    console.log(error);
  })
  this.router.navigate(['/home']);
 }


}
