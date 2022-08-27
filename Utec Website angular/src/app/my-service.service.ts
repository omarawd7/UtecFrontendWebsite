import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  api_url='https://utecweb.herokuapp.com/public/test ';

constructor(private http:HttpClient) { }
getmassage(){
  return this.http.get(this.api_url);
}
}








