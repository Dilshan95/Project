import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { VehiclesTableDataSource } from './vehicles-table-datasource';
import { VehicleService } from '../_services/vehicle.service';
import { VehicleUpdateComponent } from '../vehicleUpdate/vehicleUpdate.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css']
})
export class VehiclesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: VehiclesTableDataSource;
  data;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id','VehicleType','EngineNo','ChassisNo','NoofSeats','FuelType','ManufactureYear','RegistrationDate','Institute','actions'];
  constructor(private vehicelService:VehicleService,private dialog : MatDialog,private route:Router){}
  ngOnInit() {
    this.getVehicle();
  }

  getVehicle(){
    this.vehicelService.getVehicle()
    .subscribe(response=>{
      this.data=response;
      //console.log(this.data);
      this.dataSource= new VehiclesTableDataSource(this.paginator,this.sort,this.data);
    },(error:Response)=>{   
    })
  }

  onUpdate(row){

    VehicleUpdateComponent.vehicleId=row._id;
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      this.dialog.open(VehicleUpdateComponent, dialogConfig);
      
  }

}



