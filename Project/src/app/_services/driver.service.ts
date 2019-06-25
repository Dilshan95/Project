import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  baseUrl = 'http://localhost:3000/api/';
constructor(private http: HttpClient) { }


createDriver(driver: any){
  return this.http.post(this.baseUrl + 'drivers', driver)
}

getDriver() {
  return this.http.get(this.baseUrl + 'drivers');
}

getOneDriver(driverId) {
  return this.http.get(this.baseUrl + 'drivers/'+driverId);
}

updateDriver(changedDriver,driverId){
  return this.http.put(this.baseUrl + 'drivers/'+driverId,changedDriver);
}

}
