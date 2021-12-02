import { DoctorService } from './../doctor.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date=new Date();
  listSpecialty:any[]=[];
  specId:any;
  fR:FormGroup;
  country:Country=new Country();
  listCity:any[]=[];


  constructor(private service:DoctorService,private fb:FormBuilder) {
    this.fR=this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
    ]],
      phoneNum: [+'',Validators.required],
      password: ['',Validators.required],
      specId:['',Validators.required],
      address: ['',Validators.required],
      rPassword: ['',Validators.required],
      city: ['',Validators.required]
    },{
      validator: this.MustMatch('password', 'rPassword')

    }
    )

   }
   getCitys(){

     this.country.country='tunisia';
     console.log(this.country)
     this.service.allCity(this.country).subscribe(result =>{

      this.listCity=result.data;
      console.log(this.listCity);
     }

      )
   }

  ngOnInit() {
    this.getCitys();

    this.service.AllSpeciality().subscribe(data =>{
 this.listSpecialty=data;
      console.log(this.listSpecialty);
    })
  }
  addDoctor(){
    console.log(this.fR.valid);
    var data=this.fR.value;
    delete data.rPassword;
    data.specId=+this.fR.get('specId').value;
    console.log(data)
    if(this.fR.invalid){
      alert("Verifier les champs");

      return;
    }

    this.service.addDoctor(data).subscribe(res=>{
      console.log(res);
      alert('Inscription effectué avec success')

    })

  }
  MustMatch(pass:string,rPass:string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[pass];
      const matchingControl = formGroup.controls[rPass];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }

      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }

  }
  ValidateEmail() : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {

var email=control.value;
   const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    if (!email.match(pattern)) {
      control.setErrors({ InvalidEmail: true });
      return { InvalidEmail: true };
    }
    return null;
  }
}


}
