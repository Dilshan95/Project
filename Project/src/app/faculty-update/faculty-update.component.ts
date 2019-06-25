import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { FacultyService } from '../_services/faculty.service';

@Component({
  selector: 'app-faculty-update',
  templateUrl: './faculty-update.component.html',
  styleUrls: ['./faculty-update.component.css']
})
export class FacultyUpdateComponent implements OnInit {

  static facultyId;
  faculty:any;
  changedFaculty:any;
  facultyForm=new FormGroup(
    { _id: new FormControl(''),
    Name: new FormControl(''),
    DeanName: new FormControl(''),
    DeanMail: new FormControl(''),
    DeanPhoneNumber: new FormControl(''),
  }
  );

  constructor(private dialogRef:MatDialogRef<FacultyUpdateComponent>,private facultyService:FacultyService,private router:Router) { }

  ngOnInit() {
    console.log(FacultyUpdateComponent.facultyId);
    this.facultyService.getOneFaculty(FacultyUpdateComponent.facultyId)
    .subscribe(response=>{
      console.log(response);
      this.populateForm(response);
    },(error:Response)=>{   
    })
  }

  close(){
    this.dialogRef.close();
  }

  populateForm(faculty) {
   this.facultyForm.setValue({
    _id:faculty._id,
    Name:faculty.Name,
    DeanName:faculty.DeanName,
    DeanMail:faculty.DeanMail,
    DeanPhoneNumber:faculty.DeanPhoneNumber
   })
 }

 updateFaculty(){
   this.changedFaculty=Object.assign({},this.facultyForm.value);
   console.log(this.changedFaculty)
   this.facultyService.updateFaculty(this.changedFaculty,FacultyUpdateComponent.facultyId)
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
