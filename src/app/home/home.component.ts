import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listSpecialty:any[]=[];
  city:string;
  specId:any;
  listDoctor:any[]=[];
  data:Country=new Country();
  citys:any[]=[];


  constructor(private service:DoctorService) { }

  ngOnInit() {
    console.log("homme")
    this.service.AllSpeciality().subscribe(data =>{


      this.listSpecialty=data;
      console.log(this.listSpecialty);

  })
  this.service.allDoctor().subscribe(data =>{
    this.listDoctor=data;
    console.log(this.listDoctor)
  })
  this.data.country='tunisia';
  this.service.allCity(this.data).subscribe(data =>{
    this.citys=data.data;
    console.log(this.citys);
  })

}
search(){
  console.log(this.city,this.specId);
  this.service.searchDoctor(this.city,this.specId).subscribe(data =>{
    this.listDoctor=data;

    console.log(this.listDoctor);
  })

}

}
