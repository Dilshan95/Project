import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReservationsService } from '../_services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_services/dialog.service';
import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.component.html',
  styleUrls: ['./dialog-delete-confirm.component.css']
})
export class DialogDeleteConfirmComponent implements OnInit {

  vehicleId:any;
  data:any;
  reservations:any;
  constructor(private reservationsService:ReservationsService,private route:ActivatedRoute, private router:Router, 
    private dialogService:DialogService, private vehicleService:VehicleService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
        this.vehicleId=params.get('id');
      
        this.reservationsService.getDriverReservations(this.vehicleId)
        .subscribe(
          response=>{
            this.data=response;
            this.reservations=this.data.reservationsData
            this.reservations.forEach(reservation => {
              reservation.EndTime=new Date(reservation.EndTime).toDateString();
              reservation.StartTime=new Date(reservation.StartTime).toDateString();
            });
            console.log(this.reservations);
            },
          error=>{
            alert('An unexpected error occurred.');
            console.log(error);
        });
    })
  }


}
