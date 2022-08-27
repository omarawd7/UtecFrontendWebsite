import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private http:HttpClient,public cookie: CookieService) {}

  login(username: string,password:string){
    return this.http.post<any>('http://localhost:8000/accounts/api/auth/',
       {username ,password }, httpOptions).pipe(
           map(user => {
              if(user && user.token){
                //    local storage limited to handle only string key/value pairs we can do like below using JSON.stringify and while getting value JSON.parse
                 localStorage.setItem("CurrentUser",JSON.stringify(user));
                 this.cookie.set('token',user.token);
                   }
               return user;
           })
        );
    }
    checkAuthority(token: string){
   if(token==this.cookie.get('token'))
     {
       return true;
     }
     else{
      return false;
     }
      }

logout(){
  //localStorage.removeItem('currentUser');
  localStorage.removeItem('CurrentUser');
  this.cookie.delete('token');
  location.reload();
}

}
