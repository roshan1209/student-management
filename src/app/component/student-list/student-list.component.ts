import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  details=[]; 
  jsondetails=[];
  constructor( private router : Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('sdetails'));
    this.http.get<any>('assets/json/studentdetails.json').subscribe(
      data=>{
        
        // console.log(data);
        this.jsondetails = data.student;
        console.log(this.jsondetails);
      }
    )
    
  }
  delete(i:any){
    for (let item=0;item<this.details.length;item++){
      if(item == i){
        this.details.splice(i,1);
      }
    }
    localStorage.setItem('sdetails',JSON.stringify(this.details));
  }
  edit(no){
    this.router.navigate(['studentadd'],{queryParams:{rollno:no}})
  }
  addredirect(){
    this.router.navigate(['studentpage/studentadd']);
  }
  inforedirect(){
    this.router.navigate(['studentpage/studentinfo']);
  }
}

