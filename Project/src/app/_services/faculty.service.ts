import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  baseUrl = 'http://localhost:3000/api/';
constructor(private http: HttpClient) { }

getFaculty() {
  return this.http.get(this.baseUrl + 'faculty');
}

getOneFaculty(facultyId) {
  return this.http.get(this.baseUrl + 'faculty/'+facultyId);
}

updateFaculty(changedFaculty,facultyId){
  return this.http.put(this.baseUrl + 'faculty/'+facultyId,changedFaculty);
}

}
