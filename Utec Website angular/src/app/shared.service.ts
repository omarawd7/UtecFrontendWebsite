import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
 })

export class SharedService {
private massageS=new BehaviorSubject<string>('default Massage');
private usern=new BehaviorSubject<string>('default Massage');
private em=new BehaviorSubject<string>('default Massage');
private passw=new BehaviorSubject<string>('default Massage');

currentMessage=this.massageS.asObservable();
currentusern=this.usern.asObservable();
currentem=this.em.asObservable();
currentpassw=this.passw.asObservable();

constructor() { }

changeMessage(message : string ){
this.massageS.next(message);

}
changeUsername(user : string ){
  this.usern.next(user);
  }

changepass(pa : string ){
    this.passw.next(pa);
    }

changeEmail(email : string ){
      this.em.next(email);
      }

}
