import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

baseUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

getAllreservations(){
  return this.http.get(this.baseUrl + 'reservations');
}

}
