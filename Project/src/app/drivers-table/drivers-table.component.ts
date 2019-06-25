import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { DriversTableDataSource } from './drivers-table-datasource';
import { DriverService } from '../_services/driver.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { DriverFormComponent } from '../driverForm/driverForm.component';
import { DriverUpdateComponent } from '../driverUpdate/driverUpdate.component';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DriversTableDataSource;
  data;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id','Name','VehicleType','PhoneNumber','Address','DateOfBirth','actions'];
  constructor(private driverService:DriverService,private router: Router,private authService:AuthService,private dialog : MatDialog){}
  ngOnInit() {
    this.getDriver();
    }
  getDriver(){
      this.driverService.getDriver()
      .subscribe(response=>{
        this.data=response;
        //console.log(this.data);
        this.dataSource= new DriversTableDataSource(this.paginator,this.sort,this.data);
      },(error:Response)=>{   
      })
  }


  onUpdate(row){

    DriverUpdateComponent.driverId=row._id;
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      this.dialog.open(DriverUpdateComponent, dialogConfig);
  
  }
  

}
