import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RigesterService {

  api_url='https://utecweb.herokuapp.com/ ';
  constructor(private http:HttpClient) {}

  Rigester(CompanyName: string,Email:string){
    return this.http.post<any>('https://utecweb.herokuapp.com/public/RR/',
       {CompanyName ,Email }, httpOptions).pipe(
        );
    }

}
