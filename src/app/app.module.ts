import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PartnersComponent } from './partners/partners.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 42d029ba0c09eda7001f41f31e6610b0f18640d8






@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    PartnersComponent,
<<<<<<< HEAD
    LoginComponent
=======
    RegisterComponent
>>>>>>> 42d029ba0c09eda7001f41f31e6610b0f18640d8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
