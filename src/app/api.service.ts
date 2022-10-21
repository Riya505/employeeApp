import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewEmploye=()=>{
    return this.http.get("http://localhost:8080/viewEmploye")
  }
  deleteEmploye=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/EmployeEntry",data)
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
}
