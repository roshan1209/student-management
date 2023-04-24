import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './component/student-add/student-add.component';
import { StudentInfoComponent } from './component/student-info/student-info.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentPageComponent } from './component/student-page/student-page.component';

const routes: Routes = [
  {path:'',redirectTo:"studentpage",pathMatch:'full'},
  {path:'studentpage' , component:StudentPageComponent,children:[
    {path:'',redirectTo:"studentlist",pathMatch:'full'},
    {path:'studentadd' , component:StudentAddComponent},
    {path:'studentlist',component:StudentListComponent},
    {path:'studentinfo' , component:StudentInfoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
