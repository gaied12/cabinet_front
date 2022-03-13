import { MettingService } from './../metting.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
listMeting:any[]=[];
fliterList:any[]=[];
idDoctor:number;

form:FormGroup
  constructor(private fb:FormBuilder,public datepipe: DatePipe,private mettingService:MettingService) {

   }

  ngOnInit() {
    this.form=this.fb.group({
      date:['',[Validators.required,this.ValidateDate()]],
    })

    let user=JSON.parse(localStorage.getItem('user') );
    if (!user) {
      console.log(user);
    }
    this.idDoctor=user.id;



this.allMettings();

  }
  accept(x:any){
    console.log(x)
    this.mettingService.accept(x).subscribe(result =>{

this.allMettings();
    })


  }
cancel(x:any){
    console.log(x)
    this.mettingService.cancel(x).subscribe(result =>{

      this.allMettings();
          })


  }
  allMettings(){
    this.mettingService.allMettings(this.idDoctor).subscribe(result =>{
      this.listMeting=result;
      this.fliterList=this.listMeting;
      console.log(result)
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
filterByDate(){
  console.log(this.form.get('date').value)
  this.fliterList=this.listMeting.filter(x => x.date === this.form.get('date').value);
}



}
