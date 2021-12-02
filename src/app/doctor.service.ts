import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private loginStatus = new BehaviorSubject<boolean>(false);
  url: string='http://localhost:9090/';
  apiUrl='https://countriesnow.space/api/v0.1/countries/cities';

  constructor(private http: HttpClient) { }
 public AllSpeciality():Observable<any[]>{
    return this.http.get<any[]>(this.url+'speciality/all');

  }
  public addDoctor(data:any):Observable<any>{
    return this.http.post<any>(this.url+'add/doctor',data);



  }
  public auth(data:any):Observable<any>{
    return this.http.post<any>(this.url+'auth/doctor',data);

  }
  public getLogged()
  {
      return this.loginStatus.asObservable();
  }
  allDoctor():Observable<any[]>{
    return this.http.get<any[]>(this.url+'all/doctor');
  }


 public setLogged(x:boolean){
    this.loginStatus.next(x);

  }
    addMetting(data:any):Observable<any>{

      return this.http.post<any>(this.url+'add/metting',data);
    }
    searchDoctor(city:string,specId:string):Observable<any[]>{
      let params = new HttpParams();
      params=params.append('address',city);
      params=params.append('specId',specId);


      return this.http.get<any[]>(this.url+'all/doctor/filter',{params})
    }
    allCity(data:any):Observable<any>{
      return this.http.post<any>(this.apiUrl,data);

    }
    getDOctor(id:number):Observable<any>{
      return this.http.get<any>(this.url+`doctor/${id}`);
    }

  }
