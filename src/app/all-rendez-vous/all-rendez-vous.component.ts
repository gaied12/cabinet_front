import { MettingService } from './../metting.service';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-rendez-vous',
  templateUrl: './all-rendez-vous.component.html',
  styleUrls: ['./all-rendez-vous.component.css']
})
export class AllRendezVousComponent implements OnInit {
  date:any;
  listMeting:any[]=[];
  filtredList:any[]=[];
form:FormGroup;


  constructor(private service:MettingService,private fb:FormBuilder) {
    this.form=this.fb.group({
      date:['',[Validators.required,this.ValidateDate()]],
    })
   }

  ngOnInit() {
    let doctor=JSON.parse(localStorage.getItem('user'));
    this.service.allMettAcepted(doctor.id).subscribe(result =>{

this.listMeting=result;
this.filtredList=this.listMeting;


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
  this.filtredList=this.listMeting.filter(x => x.date === this.form.get('date').value);




}
}
