import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }
getOneReservation(id){
  return this.http.get(this.baseUrl+'reservations/'+id);
// }
}
updateReservationConfirmation(reservation:any){
  return this.http.put(this.baseUrl + 'reservations/'+reservation._id, reservation);
}

sendEmail(email)
{
  return this.http.post(this.baseUrl+'email',email);
}

getDeanMail(student){
  return this.http.get(this.baseUrl + 'student/'+student._id);
}

deleteReservation(reservation){
  return this.http.delete(this.baseUrl + 'reservations/'+ reservation)
}

}