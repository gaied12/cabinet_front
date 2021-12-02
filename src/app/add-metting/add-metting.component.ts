import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-metting',
  templateUrl: './add-metting.component.html',
  styleUrls: ['./add-metting.component.css']
})
export class AddMettingComponent implements OnInit {
 fM:FormGroup;
 doctor:any;
  constructor(private fb:FormBuilder,private rou:ActivatedRoute,private service:DoctorService,private router:Router) {
    this.fM=this.fb.group({

      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
    ]],
          phoneNum: [+'',Validators.required],
      date: ['',[Validators.required,this.ValidateDate()]],
      time: ['',Validators.required],
      doctorId: [+this.rou.snapshot.paramMap.get('doctorId'),Validators.required]

    })
   }
   ValidateDate() : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {

   var date=new Date(control.value);
    if (date.getDay()==0) {
      control.setErrors({ InvalidDate: true });
      return { InvalidDate: true };
    }
    return null;
  }
}


  ngOnInit() {
    this.service.getDOctor(+this.rou.snapshot.paramMap.get('doctorId')).subscribe(result => {
this.doctor=result;
      console.log(result);
    })
  }
  add( ){
    if ( this.fM.invalid){
      alert("Verifier les champs");
    }
    else {

    this.service.addMetting(this.fM.value).subscribe(res => {

      alert("Rendez-vous Enrégister avec succes");
      this.router.navigateByUrl('/home')



    })
  }




  }

}
