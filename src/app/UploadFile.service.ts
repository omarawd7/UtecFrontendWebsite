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
export class UploadFileService {

  api_url='https://utecweb.herokuapp.com/public/UF/';
  constructor(private http:HttpClient) {}
  UploadaFile(CompanyName: string, File:any){
    return this.http.post<any>(this.api_url,
       {CompanyName ,File }, httpOptions).pipe(
        );
    }



}
