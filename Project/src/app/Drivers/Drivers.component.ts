import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-Drivers',
  templateUrl: './Drivers.component.html',
  styleUrls: ['./Drivers.component.css']
})
export class DriversComponent implements OnInit {
  displayedColumns = ['nicNo', 'name','vehicleType','phoneNumber','address','birthdate'];
  DriversForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  createDriverForm(){
        this.DriversForm = new FormGroup({
          nicNo: new FormControl()});
        }


}
