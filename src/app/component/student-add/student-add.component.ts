import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  students!: FormGroup;
  studentDetails = [];
  index:number; 
  constructor(private router:Router,private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  paramsObject: any = {}
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.paramsObject = params.rollno
        console.log(this.paramsObject);

      }
      );
    this.students = this.formBuilder.group({
      name: ['', Validators.required],
      rollno: ['', Validators.required],
      class: ['', Validators.required],
      dob: ['', Validators.required],
      pno: ['', Validators.required],
      bg: ['', Validators.required],
      fn: ['', Validators.required],
      mn: ['', Validators.required],
      fo: ['', Validators.required],
      an: ['', Validators.required],
      rel: ['', Validators.required],
      addr: ['', Validators.required]
    })
    var data = JSON.parse(localStorage.getItem('sdetails'));
    
    if (data != null) {
      this.studentDetails = data;
      console.log(data);
      for (let i = 0; i < this.studentDetails.length; i++) {
        var data = this.studentDetails[i];
        var ind:number=+this.paramsObject
        if (data.rollno == ind) {
          this.index=i
          this.students.patchValue(data)
        }
      }
      
    }

  }

  stud() {
    var getdata = this.students.value;   
    if(this.index != undefined){
      
      debugger
      this.studentDetails[this.index]=getdata
    }else{
      this.studentDetails.push(getdata);
    }
    var a = JSON.stringify(this.studentDetails);
    localStorage.setItem('sdetails', a);
    this.router.navigate(['studentpage/studentlist']);
    // var b = localStorage.getItem('sdetails');
    // JSON.parse(b);

    // console.log(this.studentDetails);
  }


}
