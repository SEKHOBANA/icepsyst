import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import {AboutComponent } from './about/about.component';
import {ProjectsComponent } from './projects/projects.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PartnersComponent} from './partners/partners.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'landing', component: LandingComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component: ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'partners',component:PartnersComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'landing', pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

