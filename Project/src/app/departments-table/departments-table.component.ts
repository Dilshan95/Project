import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { DepartmentsTableDataSource } from './departments-table-datasource';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { DepartmentService } from '../_services/department.service';
import { DepartmentUpdateComponent } from '../departmentUpdate/departmentUpdate.component';

@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DepartmentsTableDataSource;
  data;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'Name','HODName','HODMail','HODPhoneNumber','faculty','actions'];
  constructor(private departmentService:DepartmentService,private router: Router,private authService:AuthService,private dialog : MatDialog){}
  ngOnInit() {
    this.getDepartment();
  }
  getDepartment(){
    this.departmentService.getDepartment()
    .subscribe(response=>{
      this.data=response;
      console.log(this.data[1].faculty.Name);
      this.dataSource= new DepartmentsTableDataSource(this.paginator,this.sort,this.data);
    },(error:Response)=>{   
    })
}

onUpdate(row){
  DepartmentUpdateComponent.departmentId=row._id;
  // console.log(DepartmentUpdateComponent.departmentId);
  
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    this.dialog.open(DepartmentUpdateComponent, dialogConfig);
    
}
}
