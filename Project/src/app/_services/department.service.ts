import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = 'http://localhost:3000/api/';
constructor(private http: HttpClient) { }

// createDepartment(department: any){
//   return this.http.post(this.baseUrl + 'department', department)
// }

getDepartment() {
  return this.http.get(this.baseUrl + 'department');
}

getOneDepartment(departmentId) {
  return this.http.get(this.baseUrl + 'department/'+departmentId);
}

updateDepartment(changedDepartment,departmentId){
  return this.http.put(this.baseUrl + 'department/'+departmentId,changedDepartment);
}

}
