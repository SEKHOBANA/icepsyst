import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import {AboutComponent } from './about/about.component';
import {ProjectsComponent } from './projects/projects.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PartnersComponent} from './partners/partners.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 42d029ba0c09eda7001f41f31e6610b0f18640d8

const routes: Routes = [
  {path:'landing', component: LandingComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component: ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'partners',component:PartnersComponent},
<<<<<<< HEAD
  {path:'login',component:LoginComponent},
=======
  {path:'register', component: RegisterComponent },
>>>>>>> 42d029ba0c09eda7001f41f31e6610b0f18640d8
  {path:'',redirectTo:'landing', pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

