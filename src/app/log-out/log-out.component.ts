import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router,private service:DoctorService) {
    localStorage.clear();
    this.service.setLogged(false);
    this.router.navigate(['/login']);
   }

  ngOnInit() {
  }

}
