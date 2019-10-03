import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl = 'http://localhost:3000/api/';
constructor(private http: HttpClient) { }


createVehicle(vehicle: any){
  return this.http.post(this.baseUrl + 'vehicles', vehicle)
}

getVehicle() {
  return this.http.get(this.baseUrl + 'vehicles/driverNotAssigned/false/available');
}
getAllVehicles(){
  return this.http.get(this.baseUrl + 'vehicles');
}

getOneVehicle(vehicleId) {
  return this.http.get(this.baseUrl + 'vehicles/'+vehicleId);
}

updateVehicle(changedVehicle,vehicleId){
  return this.http.put(this.baseUrl + 'vehicles/'+vehicleId,changedVehicle);
}

searchVehicle(string){
  return this.http.get(this.baseUrl + 'vehicles/searchVehice/ById?id='+string);
}
// searchVehicle(str:string){
//   console.log(str);
//   return this.http.get(this.baseUrl + 'serachVehicles?VehicleType='+str);
// }
getDriver(vehicleId) {
  return this.http.get(this.baseUrl + 'vehicles/getDriver/find/vehicle/driver/findDriver?vehicle='+vehicleId);
}

deleteVehicle(vehicle){
  return this.http.delete(this.baseUrl + 'vehicles/'+ vehicle)
}

}
