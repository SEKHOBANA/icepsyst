import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicaionComponent } from './applicaion.component';

const routes: Routes = [
  {path:'',component:  ApplicaionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
