import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewEmploye().subscribe(
      (data)=>{
        this.EmployeData=data
      }
    )
   }

   deleteEmploye=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteEmploye(data).subscribe(
      (resp)=>{
        alert("Deleted")
      }
    )
    
    this.fetchData()
   }

  EmployeData:any=[]

  ngOnInit(): void {
  }

}
