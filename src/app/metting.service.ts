import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MettingService {
  url: string='http://localhost:9090/';

  constructor(private http: HttpClient) { }
allMettings(id:number): Observable<any[]>{

  return this.http.get<any[]>(this.url+'alll/metting/'+`${id}`);
}
accept(id:number):Observable<any>{

  return this.http.get<any>(this.url+'accept/metting/'+`${id}`);
}
cancel(id:number):Observable<any>{

  return this.http.get<any>(this.url+'cancel/metting/'+`${id}`);
}
allMettAcepted(id:number):Observable<any[]>{
  return this.http.get<any[]>(this.url+'all/meet/aceppted/'+`${id}`)


}

}
