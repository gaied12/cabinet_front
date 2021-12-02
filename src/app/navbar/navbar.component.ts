import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loggedIn: boolean = false;
  constructor(private service:DoctorService) {




  }

  ngOnInit() {
    this.service.getLogged().subscribe(data =>{
      console.log(data);
      this.loggedIn=data;
      console.log(this.loggedIn);
    })



  }
  refrech(){
    window.location.href = '/home';
  }


}
