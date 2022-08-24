import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  api_url='https://utecweb.herokuapp.com/public/BC/1/';
  api_url2='https://utecweb.herokuapp.com/public/BC/2/';
  api_url3='https://utecweb.herokuapp.com/public/BC/3/';
  api_url4='https://utecweb.herokuapp.com/public/BC/4/';
  api_url5='https://utecweb.herokuapp.com/public/BC/5/';
  api_url6='https://utecweb.herokuapp.com/public/BC/6/';
  api_url7='https://utecweb.herokuapp.com/public/BC/7/';
  api_url8='https://utecweb.herokuapp.com/public/BC/8/';
  api_url9='https://utecweb.herokuapp.com/public/BC/9/';
  api_url10='https://utecweb.herokuapp.com/public/BC/10/';
  api_url11='https://utecweb.herokuapp.com/public/BC/11/';
  api_url12='https://utecweb.herokuapp.com/public/BC/12/';
  api_url13='https://utecweb.herokuapp.com/public/BC/13/';
  api_url14='https://utecweb.herokuapp.com/public/BC/14/';
  api_url15='https://utecweb.herokuapp.com/public/BC/15/';
  api_url16='https://utecweb.herokuapp.com/public/BC/16/';
  api_url17='https://utecweb.herokuapp.com/public/BC/17/';
  api_url18='https://utecweb.herokuapp.com/public/BC/18/';
  api_url19='https://utecweb.herokuapp.com/public/BC/19/';
  api_url20='https://utecweb.herokuapp.com/public/BC/20/';
  api_url21='https://utecweb.herokuapp.com/public/BC/21/';
  api_url22='https://utecweb.herokuapp.com/public/BC/22/';
  api_url23='https://utecweb.herokuapp.com/public/BC/23/';
  api_url24='https://utecweb.herokuapp.com/public/BC/24/';
  api_url25='https://utecweb.herokuapp.com/public/BC/25/';
  api_url26='https://utecweb.herokuapp.com/public/BC/26/';
  api_url27='https://utecweb.herokuapp.com/public/BC/27/';
  api_url28='https://utecweb.herokuapp.com/public/BC/28/';
  api_url29='https://utecweb.herokuapp.com/public/BC/29/';
  api_url30='https://utecweb.herokuapp.com/public/BC/30/';
  api_url31='https://utecweb.herokuapp.com/public/BC/31/';
  api_url32='https://utecweb.herokuapp.com/public/BC/32/';
  api_url33='https://utecweb.herokuapp.com/public/BC/33/';
  api_url34='https://utecweb.herokuapp.com/public/BC/34/';
  api_url35='https://utecweb.herokuapp.com/public/BC/35/';
  api_url36='https://utecweb.herokuapp.com/public/BC/36/';
  api_url37='https://utecweb.herokuapp.com/public/BC/37/';
  api_url38='https://utecweb.herokuapp.com/public/BC/38/';
  api_url39='https://utecweb.herokuapp.com/public/BC/39/';
  api_url40='https://utecweb.herokuapp.com/public/BC/40/';
  api_url41='https://utecweb.herokuapp.com/public/BC/41/';
  api_url42='https://utecweb.herokuapp.com/public/BC/42/';
  api_url43='https://utecweb.herokuapp.com/public/BC/43/';
  api_url44='https://utecweb.herokuapp.com/public/BC/44/';
  api_url45='https://utecweb.herokuapp.com/public/BC/45/';
  api_url46='https://utecweb.herokuapp.com/public/BC/46/';
  api_url47='https://utecweb.herokuapp.com/public/BC/47/';
  api_url48='https://utecweb.herokuapp.com/public/BC/48/';
  api_url49='https://utecweb.herokuapp.com/public/BC/49/';
  api_url50='https://utecweb.herokuapp.com/public/BC/50/';
  api_url51='https://utecweb.herokuapp.com/public/BC/51/';
  api_url52='https://utecweb.herokuapp.com/public/BC/52/';
  api_url53='https://utecweb.herokuapp.com/public/BC/53/';
  api_url54='https://utecweb.herokuapp.com/public/BC/54/';
  api_url55='https://utecweb.herokuapp.com/public/BC/55/';
  api_url56='https://utecweb.herokuapp.com/public/BC/56/';
  api_url57='https://utecweb.herokuapp.com/public/BC/57/';
  api_url58='https://utecweb.herokuapp.com/public/BC/58/';
  api_url59='https://utecweb.herokuapp.com/public/BC/59/';
  api_url60='https://utecweb.herokuapp.com/public/BC/60/';
  api_url61='https://utecweb.herokuapp.com/public/BC/61/';
  api_url62='https://utecweb.herokuapp.com/public/BC/62/';
  api_url63='https://utecweb.herokuapp.com/public/BC/63/';
  api_url64='https://utecweb.herokuapp.com/public/BC/64/';
  api_url65='https://utecweb.herokuapp.com/public/BC/65/';
  api_url66='https://utecweb.herokuapp.com/public/BC/66/';
  api_url67='https://utecweb.herokuapp.com/public/BC/67/';
  api_url68='https://utecweb.herokuapp.com/public/BC/68/';
  api_url69='https://utecweb.herokuapp.com/public/BC/69/';
  api_url70='https://utecweb.herokuapp.com/public/BC/70/';
  api_url71='https://utecweb.herokuapp.com/public/BC/71/';
  api_url72='https://utecweb.herokuapp.com/public/BC/72/';
  api_url73='https://utecweb.herokuapp.com/public/BC/73/';
  api_url74='https://utecweb.herokuapp.com/public/BC/74/';
  api_url75='https://utecweb.herokuapp.com/public/BC/75/';
  api_url76='https://utecweb.herokuapp.com/public/BC/76/';
  api_url77='https://utecweb.herokuapp.com/public/BC/77/';
  api_url78='https://utecweb.herokuapp.com/public/BC/78/';
  api_url79='https://utecweb.herokuapp.com/public/BC/79/';
  api_url80='https://utecweb.herokuapp.com/public/BC/80/';
  api_url81='https://utecweb.herokuapp.com/public/BC/81/';
  api_url82='https://utecweb.herokuapp.com/public/BC/82/';
  api_url83='https://utecweb.herokuapp.com/public/BC/83/';
  api_url84='https://utecweb.herokuapp.com/public/BC/84/';
  api_url85='https://utecweb.herokuapp.com/public/BC/85/';
  api_url86='https://utecweb.herokuapp.com/public/BC/86/';
  api_url87='https://utecweb.herokuapp.com/public/BC/87/';
  api_url88='https://utecweb.herokuapp.com/public/BC/88/';
  api_url89='https://utecweb.herokuapp.com/public/BC/89/';
  api_url90='https://utecweb.herokuapp.com/public/BC/90/';
  api_url91='https://utecweb.herokuapp.com/public/BC/91/';
  api_url92='https://utecweb.herokuapp.com/public/BC/92/';
  api_url93='https://utecweb.herokuapp.com/public/BC/93/';
constructor(private http:HttpClient) { }
getH1(){
  return this.http.get(this.api_url);
}
getH2(){
  return this.http.get(this.api_url2);
}
getH3(){
  return this.http.get(this.api_url3);
}
getH4(){
  return this.http.get(this.api_url4);
}
getH5(){
  return this.http.get(this.api_url5);
}
getH6(){
  return this.http.get(this.api_url6);
}
getH7(){
  return this.http.get(this.api_url7);
}
getH8(){
  return this.http.get(this.api_url8);
}
getH9(){
  return this.http.get(this.api_url9);
}
getH10(){
  return this.http.get(this.api_url10);
}
getH11(){
  return this.http.get(this.api_url11);
}
getH12(){
  return this.http.get(this.api_url12);
}
getH13(){
  return this.http.get(this.api_url13);
}
getH14(){
  return this.http.get(this.api_url14);
}
getH15(){
  return this.http.get(this.api_url15);
}
getH16(){
  return this.http.get(this.api_url16);
}
getH17(){
  return this.http.get(this.api_url17);
}
getH18(){
  return this.http.get(this.api_url18);
}
getH19(){
  return this.http.get(this.api_url19);
}
getH20(){
  return this.http.get(this.api_url20);
}
getH21(){
  return this.http.get(this.api_url21);
}
getH22(){
  return this.http.get(this.api_url22);
}
getH23(){
  return this.http.get(this.api_url23);
}
getH24(){
  return this.http.get(this.api_url24);
}
getH25(){
  return this.http.get(this.api_url25);
}
getH26(){
  return this.http.get(this.api_url26);
}
getH27(){
  return this.http.get(this.api_url27);
}
getH28(){
  return this.http.get(this.api_url28);
}
getH29(){
  return this.http.get(this.api_url29);
}
getH30(){
  return this.http.get(this.api_url30);
}
getH31(){
  return this.http.get(this.api_url31);
}
getH32(){
  return this.http.get(this.api_url32);
}
getH33(){
  return this.http.get(this.api_url33);
}
getH34(){
  return this.http.get(this.api_url34);
}
getH35(){
  return this.http.get(this.api_url35);
}
getH36(){
  return this.http.get(this.api_url36);
}
getH37(){
  return this.http.get(this.api_url37);
}
getH38(){
  return this.http.get(this.api_url38);
}
getH39(){
  return this.http.get(this.api_url39);
}
getH40(){
  return this.http.get(this.api_url40);
}

getH41(){
  return this.http.get(this.api_url41);
}
getH42(){
  return this.http.get(this.api_url42);
}

getH43(){
  return this.http.get(this.api_url43);
}

getH44(){
  return this.http.get(this.api_url44);
}

getH45(){
  return this.http.get(this.api_url45);
}
getH46(){
  return this.http.get(this.api_url46);
}
getH47(){
  return this.http.get(this.api_url47);
}

getH48(){
  return this.http.get(this.api_url48);
}
getH49(){
  return this.http.get(this.api_url49);
}
getH50(){
  return this.http.get(this.api_url50);
}
getH51(){
  return this.http.get(this.api_url51);
}
getH52(){
  return this.http.get(this.api_url52);
}
getH53(){
  return this.http.get(this.api_url53);
}
getH54(){
  return this.http.get(this.api_url54);
}
getH55(){
  return this.http.get(this.api_url55);
}
getH56(){
  return this.http.get(this.api_url56);
}

getH57(){
  return this.http.get(this.api_url57);
}getH58(){
  return this.http.get(this.api_url58);
}
getH59(){
  return this.http.get(this.api_url59);
}

getH60(){
  return this.http.get(this.api_url60);
}
getH61(){
  return this.http.get(this.api_url61);
}
getH62(){
  return this.http.get(this.api_url62);
}
getH63(){
  return this.http.get(this.api_url63);
}
getH64(){
  return this.http.get(this.api_url64);
}
getH65(){
  return this.http.get(this.api_url65);
}
getH66(){
  return this.http.get(this.api_url66);
}
getH67(){
  return this.http.get(this.api_url67);
}
getH68(){
  return this.http.get(this.api_url68);
}
getH69(){
  return this.http.get(this.api_url69);
}
getH70(){
  return this.http.get(this.api_url70);
}
getH71(){
  return this.http.get(this.api_url71);
}
getH72(){
  return this.http.get(this.api_url72);
}
getH73(){
  return this.http.get(this.api_url73);
}
getH74(){
  return this.http.get(this.api_url74);
}getH75(){
  return this.http.get(this.api_url75);
}
getH76(){
  return this.http.get(this.api_url76);
}getH77(){
  return this.http.get(this.api_url77);
}
getH78(){
  return this.http.get(this.api_url78);
}
getH79(){
  return this.http.get(this.api_url79);
}
getH80(){
  return this.http.get(this.api_url80);
}
getH81(){
  return this.http.get(this.api_url81);
}
getH82(){
  return this.http.get(this.api_url82);
}
getH83(){
  return this.http.get(this.api_url83);
}
getH84(){
  return this.http.get(this.api_url84);
}
getH85(){
  return this.http.get(this.api_url85);
}
getH86(){
  return this.http.get(this.api_url86);
}
getH87(){
  return this.http.get(this.api_url87);
}
getH88(){
  return this.http.get(this.api_url88);
}
getH89(){
  return this.http.get(this.api_url89);
}
getH90(){
  return this.http.get(this.api_url90);
}
getH91(){
  return this.http.get(this.api_url91);
}
getH92(){
  return this.http.get(this.api_url92);
}
getH93(){
  return this.http.get(this.api_url93);
}

}

