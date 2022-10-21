import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_code=""
  name=""
  designation=""
  dob=""
  salary=""
  companyName=""

  readValue=()=>{
    let data={
      "emp_code":this.emp_code,
      "name":this.name,
      "designation":this.designation,
      "dob":this.dob,
      "salary":this.salary,
      "companyName":this.companyName
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Added")
      }
    )
  }

  ngOnInit(): void {
  }

}
