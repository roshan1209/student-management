import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  infoform: FormGroup;
  info = [];
  // ndetail = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.infoform = this.formBuilder.group({
      sinfo: ['', Validators.required]
    })
    
  }

displayData=[]
  isearch() {
    this.info = JSON.parse(localStorage.getItem('sdetails'));
    var getform = this.infoform.value;
    for (let i = 0; i < this.info.length; i++) {
      var data = this.info[i];
      if (data.rollno == getform.sinfo) {
        // this.info = data;
        if(this.displayData != null){
          this.displayData = [];
          this.displayData.push(data);
        }
          
        // console.log(this.info);
        // this.ndetail = this.info;
        // console.log(this.ndetail);
      }
    }
  }
}
