import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_services/department.service';
import { DepartmentUpdateComponent } from '../departmentUpdate/departmentUpdate.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-department-all',
  templateUrl: './department-all.component.html',
  styleUrls: ['./department-all.component.css']
})
export class DepartmentAllComponent implements OnInit {
  departments:any;
  constructor(private departmentService:DepartmentService,private dialog: MatDialog) {
    this.viewDepartments();
   }

  ngOnInit() {

  }
  viewDepartments(){
    this.departmentService.getDepartment()
      .subscribe(
        response=>{
          console.log(response);
           this.departments=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    onUpdate(department){

      DepartmentUpdateComponent.departmentId=department._id;
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        this.dialog.open(DepartmentUpdateComponent, dialogConfig);
    
    }
}
