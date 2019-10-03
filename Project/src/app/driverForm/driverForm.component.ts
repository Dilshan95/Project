import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from '../_services/driver.service';
import { driverFormValidators } from './driverFormValidators';
import { VehicleService } from '../_services/vehicle.service';
import { VehicleUpdateComponent } from '../vehicleUpdate/vehicleUpdate.component';


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
  Vehicles:any;
  vehicle:any;
  changedVehicle:any;
  constructor(private fb: FormBuilder,private driverService:DriverService,private router:Router, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.createRegisterForm();
    this.loadVehicle();
  }
  createRegisterForm() {
    this.DriverForm = this.fb.group({
      _id: ['',driverFormValidators._idValidator],
      Name:['',driverFormValidators.NameValidator],
      Vehicle:[''],
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
      // console.log(this.vehicle);
      // this.vehicle.HasADriver=true;
      // this.vehicleService.updateVehicle(this.changedVehicle,VehicleUpdateComponent.vehicleId)
      // .subscribe(response=>{
      //           console.log(response);
      // },
      // error=>{
      // alert('An unexpected error occurred.');
      // console.log(error);
      // });
      alert("Succesfully created driver");
      this.router.navigate(['/home']);
   
    },(error:Response)=>{
      
      if(error.status===400){
        alert('Driver already exsists');
      }
      else alert('Unexpected error found');
    }) ;
  }


  get _id() {
    return this.DriverForm.get('_id');
  }


  loadVehicle(){
    this.vehicleService.getVehicle()
    .subscribe(response=>{
      this.Vehicles=response;

    },(error:Response)=>{
    })
  }


  searchVehicle(event){

    console.log(this.DriverForm.get('Vehicle').value);
    if((event.keyCode==40)||(event.keyCode==38)){
      return 
    }
    this.vehicleService.searchVehicle(this.DriverForm.get('Vehicle').value)
    .subscribe(response=>{
      this.Vehicles=response;
      
    },(error:Response)=>{
    })
  }


}
