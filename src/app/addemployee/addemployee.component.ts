import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
