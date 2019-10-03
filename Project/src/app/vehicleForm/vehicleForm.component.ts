import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../_services/vehicle.service';
import { Router } from '@angular/router';
import { vehicleFormValidators } from './vehicleFormValidators';

@Component({
  selector: 'app-vehicleForm',
  templateUrl: './vehicleForm.component.html',
  styleUrls: ['./vehicleForm.component.css']
})
export class VehicleFormComponent implements OnInit {

  vehicleForm: FormGroup;
  vehicleTypes=["Car","Van","Bus","Cab","Lorry","Motor cycle","Tractor"]
  constructor( private fb: FormBuilder,private vehicleService:VehicleService,private router:Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.vehicleForm = this.fb.group({
      _id: ['',Validators.required],
      VehicleType:['',Validators.required],
      // RegNo: ['', Validators.required],
      EngineNo: ['', Validators.required],
      ChassisNo: ['', Validators.required],
      NoofSeats: ['', vehicleFormValidators.NoofSeatsValidator],
      FuelType: ['', vehicleFormValidators.FuelTypeValidator],
      ManufactureYear: ['', vehicleFormValidators.ManufactureYearValidator],
      RegistrationDate: ['', Validators.required],
      Institute: ['', vehicleFormValidators.InstituteYearValidator],
      HasADriver:['']   
    });
  }
  
  submit(){
    this.vehicleForm.patchValue({HasADriver:false});

    let vehicle = Object.assign({}, this.vehicleForm.value);
   
    this.vehicleService.createVehicle(vehicle).subscribe(next=>{
      alert("Succesfully created vehicle");
      this.router.navigate(['/home']);
   
    },(error:Response)=>{
      
      if(error.status===400){
        alert('Vehicel ID exsists');
      }
      else alert('Unexpected error found');
    })  
  }

}








