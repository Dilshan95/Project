import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { ReservationsService } from '../_services/reservations.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  reservationForm: FormGroup;
  public static data: any;
  constructor(private fb: FormBuilder, private reservationervice:ReservationsService) { }

  ngOnInit() {
    this.createReservationForm();
    this.eventObject.dataSource=ScheduleComponent.data;
    // console.log(this.data);
  }
  createReservationForm() {
    this.reservationForm = this.fb.group({
      Departure:[''],
      Arrival: [''],
      From: [''],
      To: [''],
      Distance: [''],
      Purpose: [''],
      Passengers: [''],
      PhoneNumber: [''],
      Lecturer: [''],
      Description: [''],   
    });
  }

  private eventData: DataManager = new DataManager({
    // url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor:new WebApiAdaptor,
    crossDomain:true
  });

  title = 'scheduler-new'; 
  //public setDate:Date =new Date(2019,5,5);
 
  
   public eventObject: EventSettingsModel={
     dataSource: ScheduleComponent.data
   }
  
   addEvent(){
     console.log("success");
    //  console.log(this.data);
   }
  submit(){
    let reservation = Object.assign({}, this.reservationForm.value);
   
    // this.data.push(reservation);
    // console.log(reservation);
    // console.log(this.data);
    // this.eventObject={
    //   dataSource:this.data
    //     }
    // this.reservationService.createReservation(reservation).subscribe(next=>{
    //   alert("Succesfully created Reservation");
    //   this.router.navigate(['/home']);
   
    // },(error:Response)=>{
      
    //   if(error.status===400){
    //     alert('Reservation exsists');
    //   }
    //   else alert('Unexpected error found');
    // })  
  }

}
