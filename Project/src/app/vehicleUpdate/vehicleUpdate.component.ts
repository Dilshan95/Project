import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { VehicleService } from '../_services/vehicle.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicleUpdate',
  templateUrl: './vehicleUpdate.component.html',
  styleUrls: ['./vehicleUpdate.component.css']
})
export class VehicleUpdateComponent implements OnInit {

  static vehicleId;
  vehicle:any;
  changedVehicle:any;
  vehicleForm=new FormGroup(
    { 
    VehicleType: new FormControl(''),
    // RegNo: new FormControl(''),
    EngineNo: new FormControl(''),
    ChassisNo: new FormControl(''),
    NoofSeats: new FormControl(''),
    FuelType: new FormControl(''),
    ManufactureYear: new FormControl(''),
    RegistrationDate: new FormControl(''),
    Institute: new FormControl(''),
  }
  );

  constructor(private dialogRef:MatDialogRef<VehicleUpdateComponent>,private vehicleService:VehicleService,private router:Router) { }

  ngOnInit() {
    console.log(VehicleUpdateComponent.vehicleId);
    this.vehicleService.getOneVehicle(VehicleUpdateComponent.vehicleId)
    .subscribe(response=>{
      console.log(response);
      this.populateForm(response);
    },(error:Response)=>{   
    })
  }
  close(){
    this.dialogRef.close();
  }

  populateForm(vehicle) {
   this.vehicleForm.setValue({
   
    VehicleType:vehicle.VehicleType,
    // RegNo:vehicle.RegNo,
    EngineNo:vehicle.EngineNo,
    ChassisNo:vehicle.ChassisNo,
    NoofSeats:vehicle.NoofSeats,
    FuelType:vehicle.FuelType,
    ManufactureYear:vehicle.ManufactureYear,
    RegistrationDate:vehicle.RegistrationDate,
    Institute:vehicle.Institute,
   })
 }

 updateVehicle(){
   this.changedVehicle=Object.assign({},this.vehicleForm.value);
   console.log(this.changedVehicle)
   this.vehicleService.updateVehicle(this.changedVehicle,VehicleUpdateComponent.vehicleId)
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
