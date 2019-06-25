import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from '../_services/department.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-departmentUpdate',
  templateUrl: './departmentUpdate.component.html',
  styleUrls: ['./departmentUpdate.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  static departmentId;
  department:any;
  changedDepartment:any;
  departmentForm=new FormGroup(
    { _id: new FormControl(''),
    Name: new FormControl(''),
    HODName: new FormControl(''),
    HODMail: new FormControl(''),
    HODPhoneNumber: new FormControl(''),
  }
  );

  constructor(private dialogRef:MatDialogRef<DepartmentUpdateComponent>,private departmentService:DepartmentService,private router:Router) { }

  ngOnInit() {
    console.log(DepartmentUpdateComponent.departmentId);
    this.departmentService.getOneDepartment(DepartmentUpdateComponent.departmentId)
    .subscribe(response=>{
      console.log(response);
      this.populateForm(response);
    },(error:Response)=>{   
    })
  }
  close(){
    this.dialogRef.close();
  }

  populateForm(department) {
   this.departmentForm.setValue({
    _id:department._id,
    Name:department.Name,
    HODName:department.HODName,
    HODMail:department.HODMail,
    HODPhoneNumber:department.HODPhoneNumber
   })
 }

 updateDepartment(){
   this.changedDepartment=Object.assign({},this.departmentForm.value);
   console.log(this.changedDepartment)
   this.departmentService.updateDepartment(this.changedDepartment,DepartmentUpdateComponent.departmentId)
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
