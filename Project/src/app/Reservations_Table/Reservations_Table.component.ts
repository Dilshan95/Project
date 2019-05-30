import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Reservations_Table',
  templateUrl: './Reservations_Table.component.html',
  styleUrls: ['./Reservations_Table.component.css']
})
export class Reservations_TableComponent implements OnInit {
  displayedColumns = ['date', 'time','vehicleType','vehicleNumber','from','to','arrival'];
  constructor() { }

  ngOnInit() {
  }

}
