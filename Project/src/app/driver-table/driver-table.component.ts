import { Component, OnInit } from '@angular/core';
import { DriverService } from '../_services/driver.service';
import { DriverUpdateComponent } from '../driverUpdate/driverUpdate.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogService } from '../_services/dialog.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnInit {
  drivers:any;
  constructor(private driverService:DriverService, private dialog : MatDialog, private dialogService:DialogService,private router:Router) {
    this.viewDrivers();
   }

  ngOnInit() {
  }

  viewDrivers(){
    this.driverService.getDriver()
      .subscribe(
        response=>{
          console.log(response);
           this.drivers=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    onUpdate(driver){

      DriverUpdateComponent.driverId=driver._id;
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        this.dialog.open(DriverUpdateComponent, dialogConfig);
    
    }

    deleteDriver(driver,i){

      this.dialogService.openConfirmDialog('Are you sure?')
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){

      this.driverService.deleteDriver(driver._id)
      .subscribe(
        response=>{
        console.log(response)
        this.drivers.splice(i,1) 
        this.dialogService.openMessageDialog('Succesfully deleted');
     },
        (error: Response)=>{
          if(error.status===404)
          alert('This Driver is Already Deleted');
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
       
    })
  }
});
    }

    Reservations(driver){
      this.router.navigate(['/driverReservation',driver.vehicle]);
    }
}
