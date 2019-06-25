import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from '../_services/driver.service';
import { driverFormValidators } from './driverFormValidators';

@Component({
  selector: 'app-driverForm',
  templateUrl: './driverForm.component.html',
  styleUrls: ['./driverForm.component.css']
})
export class DriverFormComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  DriverForm: FormGroup;
  vehicleTypes=["Car","Van","Bus","Cab","Lorry","Motor Cycle","Tractor"];
  vehicleList=[];
  constructor(private fb: FormBuilder,private driverService:DriverService,private router:Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.DriverForm = this.fb.group({
      _id: ['',driverFormValidators._idValidator],
      Name:['',driverFormValidators.NameValidator],
      VehicleType: [''],
      PhoneNumber: ['',driverFormValidators.PhoneNumberValidator],
      Address: ['', Validators.required],
      DateOfBirth: ['', Validators.required],   
    });
  }

  vehicleSelect(e,vehicle){
    // console.log(e.checked);
    if(e.checked){   
      this.vehicleList.push(vehicle);
    }
    else if(!e.checked){
      let index = this.vehicleList.indexOf(vehicle);
      if (index > -1) {
        this.vehicleList.splice(index, 1);
      }
    }
    // console.log(this.vehicleList);
  }

  submit(){
    this.DriverForm.patchValue({VehicleType:this.vehicleList});
    let driver = Object.assign({}, this.DriverForm.value);
    console.log(driver);
    this.driverService.createDriver(driver).subscribe(next=>{
      alert("Succesfully created driver");
      this.router.navigate(['/home']);
   
    },(error:Response)=>{
      
      if(error.status===400){
        alert('Driver already exsists');
      }
      else alert('Unexpected error found');
    })  
  }


  get _id() {
    return this.DriverForm.get('_id');
  }

}
