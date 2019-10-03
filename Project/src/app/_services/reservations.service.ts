import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getReservation(){
  return this.http.get(this.baseUrl+'reservations/all');
}
getOneReservation(id){
  return this.http.get(this.baseUrl+'reservations/'+id);
}
updateReservationConfirmation(reservation:any){
  return this.http.put(this.baseUrl + 'reservations/'+reservation._id, reservation);
}
getConfirmedReservation(){
  return this.http.get(this.baseUrl+'reservations/confirmedReservations');
}
getPendingReservation(){
  return this.http.get(this.baseUrl+'reservations/pendingReservations');
}


deleteReservation(reservation){
  return this.http.delete(this.baseUrl + 'reservations/'+ reservation)
}

getDriverReservations(vehicleId){
  return this.http.get(this.baseUrl + 'drivers/getReservations/all?vehicle='+ vehicleId)
}
}
