import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { FacultyTableDataSource } from './faculty-table-datasource';
import { FacultyService } from '../_services/faculty.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { FacultyUpdateComponent } from '../faculty-update/faculty-update.component';

@Component({
  selector: 'app-faculty-table',
  templateUrl: './faculty-table.component.html',
  styleUrls: ['./faculty-table.component.css']
})
export class FacultyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FacultyTableDataSource;
  data;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'Name','DeanName','DeanMail','DeanPhoneNumber','actions'];
  constructor(private facultyService:FacultyService,private router: Router,private authService:AuthService,private dialog : MatDialog){}
  ngOnInit() {
    this.getFaculty();
  }
  getFaculty(){
    this.facultyService.getFaculty()
    .subscribe(response=>{
      this.data=response;
      //console.log(this.data);
      this.dataSource= new FacultyTableDataSource(this.paginator,this.sort,this.data);
    },(error:Response)=>{   
    })
}

onUpdate(row){

  FacultyUpdateComponent.facultyId=row._id;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    this.dialog.open(FacultyUpdateComponent, dialogConfig);

}

}
