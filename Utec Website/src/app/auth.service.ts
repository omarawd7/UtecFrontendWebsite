import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url='https://utecweb.herokuapp.com/ ';
  constructor(private http:HttpClient) {}

  login(username: string,password:string){
    return this.http.post<any>('https://utecweb.herokuapp.com/accounts/api/auth/',
       {username ,password }, httpOptions).pipe(
           map(user => {
              if(user && user.token){
             //    localStorage.setItem("currentUser",JSON.stringify(user));
                 localStorage.setItem("CurrentUserEmail",user.email);
                 localStorage.setItem("CurrentUsername",user.username);
                   }
               return user;
           })
        );
    }

logout(){
  //localStorage.removeItem('currentUser');
  localStorage.removeItem('CurrentUsername');
  localStorage.removeItem('CurrentUserEmail');
  location.reload();

}

}
