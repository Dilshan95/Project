import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Vehicles',
  templateUrl: './Vehicles.component.html',
  styleUrls: ['./Vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  displayedColumns = ['type', 'regNo','engineNo','chassisNo','seats','fuelType','manufactureYear','registeredYear','institute'];
  constructor() { }

  ngOnInit() {
  }

}
