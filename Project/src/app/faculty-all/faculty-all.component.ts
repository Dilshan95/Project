import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../_services/faculty.service';
import { FacultyUpdateComponent } from '../faculty-update/faculty-update.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-faculty-all',
  templateUrl: './faculty-all.component.html',
  styleUrls: ['./faculty-all.component.css']
})
export class FacultyAllComponent implements OnInit {
  faculties:any;
  constructor(private facultyService:FacultyService,private dialog: MatDialog) {
    this.viewFaculties();
   }

  ngOnInit() {

  }
  viewFaculties(){
    this.facultyService.getFaculty()
      .subscribe(
        response=>{
          console.log(response);
           this.faculties=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    onUpdate(faculty){
      
      FacultyUpdateComponent.facultyId=faculty._id;
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        this.dialog.open(FacultyUpdateComponent, dialogConfig);
    
    }
}
