import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from './../users.service';

@Component({
  selector: 'app-applicaion',
  templateUrl: './applicaion.component.html',
  styleUrls: ['./applicaion.component.css']
})
export class ApplicaionComponent implements OnInit {

  @Input() applyData = {
    firstname: " ", lastname: " ", email: " ", idno: " ", gender: " ", specialization: " ", mobileno: " ", proglanguages: " "
  }

  constructor(private users_Service: UsersService ) { }

  ngOnInit(){
  }

  postApplication()
  {
    this.users_Service.PostApplication(this.applyData).subscribe(
      data => console.log(data));
      console.log(this.applyData.firstname);
      console.log(this.applyData.lastname);
      console.log(this.applyData.email);
      console.log(this.applyData.idno);
      console.log(this.applyData.gender);
      console.log(this.applyData.specialization);
      console.log(this.applyData.mobileno);
      console.log(this.applyData.proglanguages);
  }


}
