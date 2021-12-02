import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
fL:FormGroup;
  constructor(private fb:FormBuilder,private service:DoctorService,private route:Router) {
    this.fL=this.fb.group({

      email: ['',[Validators.required]],

      password:['',Validators.required]

    })
   }

  ngOnInit() {
  }
  auth(){
  if (this.fL.invalid)
{
  return ;
}

    this.service.auth(this.fL.value).subscribe(data => {
      if (data.code=='98'){
        alert('Email ou password Incorrect')
      }
      else{

        localStorage.setItem('user',JSON.stringify(data));
        this.service.setLogged(true);
        this.route.navigateByUrl('/rendez-vous')

      }
    })
  }









}
