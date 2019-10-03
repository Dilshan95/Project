import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { VehicleUpdateComponent } from '../vehicleUpdate/vehicleUpdate.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-vehicles-all',
  templateUrl: './vehicles-all.component.html',
  styleUrls: ['./vehicles-all.component.css']
})
export class VehiclesAllComponent implements OnInit {
  vehicles:any;
  constructor(private vehicleService: VehicleService, private dialog: MatDialog, private dialogService:DialogService) {
    this.viewVehicles();
   }

  ngOnInit() {
  }
  viewVehicles(){
    this.vehicleService.getAllVehicles()
      .subscribe(
        response=>{
          console.log(response);
           this.vehicles=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    onUpdate(vehicle){
      
      VehicleUpdateComponent.vehicleId=vehicle._id;
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        this.dialog.open(VehicleUpdateComponent, dialogConfig);
    
    }


    deleteVehicle(vehicle,i){

      this.dialogService.openConfirmDialog('Are you sure?')
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){

      this.vehicleService.deleteVehicle(vehicle._id)
      .subscribe(
        response=>{
        console.log(response)
        this.vehicles.splice(i,1) 
        this.dialogService.openMessageDialog('Succesfully deleted');
     },
        (error: Response)=>{
          if(error.status===404)
          alert('This Vehicle is Already Deleted');
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
       
    })
  }
});
    }
    
}
