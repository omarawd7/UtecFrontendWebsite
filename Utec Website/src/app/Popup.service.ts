import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

api_url='https://utecweb.herokuapp.com/public/BC/3/';

constructor(private http:HttpClient) { }
getmassage(){
  return this.http.get(this.api_url);
}

}
