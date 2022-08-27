import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient ,HttpEventType } from '@angular/common/http';
import {gsap} from  'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BlogService } from '../Blog.service';
import { CookieService } from 'ngx-cookie-service';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],encapsulation: ViewEncapsulation.None,

})

export class SecureComponent implements OnInit {

  myform!: FormGroup;
  blog:any;
  public name1!:string;
  public mail1!:string;
  public  pass1!:string;
  public username!:any;
  public usermail!:any;
  public user!:any;
  private token: any;

  public c2!: SecureComponent;
  validate!: boolean;
  data:any;
  message:string="";
  file:any;
  total:any;
  uploaded: boolean = false;
  startUpload: boolean = false;
  progress:any;
  h1:any;//content of the website h stands for header
  h2:any;
  h3:any;
  h4:any;
  h5:any;
  h6:any;
  h7:any;
  h8:any;
  h9:any;
  h10:any;
  h11:any;
  h12:any;
  h13:any;
  h14:any;
  h15:any;
  h16:any;
  h17:any;
  h18:any;
  h19:any;
  h20:any;
  h21:any;
  h22:any;
  h23:any;
  h24:any;
  h25:any;
  h26:any;
  h27:any;
  h28:any;
  h29:any;
  h30:any;
  h31:any;
  h32:any;
  h33:any;
  h34:any;
  h35:any;
  h58:any;
  h59:any;
  h60:any;
  h61:any;
  h62:any;
  h63:any;
  h64:any;
  h65:any;
  h66:any;
  h67:any;
  h68:any;
  h69:any;
  h70:any;
  h71:any;
  h72:any;
  h73:any;
  h74:any;
  h75:any;
  h76:any;
  h77:any;
  h78:any;
  h79:any;
  h80:any;
  @ViewChild('menu', { static: true })  menu!: ElementRef<HTMLDivElement>;
  @ViewChild('message1', { static: true })  message1!: ElementRef<HTMLDivElement>;
  @ViewChild('message2', { static: true }) message2!: ElementRef<HTMLDivElement>;
  @ViewChild('message3', { static: true }) message3!: ElementRef<HTMLDivElement>;
  @ViewChild('message4', { static: true }) message4!: ElementRef<HTMLDivElement>;
  @ViewChild('message5', { static: true }) message5!: ElementRef<HTMLDivElement>;
  constructor(private authService:AuthService ,public shared : SharedService ,private bs :BlogService, private router: Router,private http:HttpClient,@Inject(DOCUMENT) private document :Document ,public cookie: CookieService ) {

  }

  ngOnInit(): void {
    this.validate=true;
    this.user=localStorage.getItem("CurrentUser");
    this.user=JSON.parse(this.user);
    this.token=this.cookie.get('token');

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    if(this.user){ //checking  authority

     if( this.authService.checkAuthority(this.user.token)){
      this.validate=true;
     }
     else{
      this.validate=false;
      this.router.navigate(['/AccessDenied'])  .then(() => {
        window.location.reload();
      });
     }


    }else{ //if user is did not login
      this.validate=false;
      this.router.navigate(['/AccessDenied'])  .then(() => {
        window.location.reload();
      });

    }
    this.showMessage();
    this.myform =new FormGroup({
      newfile : new FormControl(''),
   });
   this.initScrollAnimation();
   this.initAnimation();
   this.showBlog();
  }
  showBlog(){
//content of the website h stands for header
    this.bs.getH1().subscribe(d=>{
     this.blog=d,
     console.log(this.blog);
     console.log('hello this is H1 content'+this?.blog?.BlogTitle);
    this.h1=this?.blog?.BlogContent;
    });

    this.bs.getH2().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h2=this?.blog?.BlogContent;
     });

    this.bs.getH3().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h3=this?.blog?.BlogContent;
     });


     this.bs.getH4().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H4 content'+this?.blog?.BlogContent);
     this.h4=this?.blog?.BlogContent;
     });

     this.bs.getH5().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h5=this?.blog?.BlogContent;
     });

     this.bs.getH6().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h6=this?.blog?.BlogContent;
     });

     this.bs.getH7().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h7=this?.blog?.BlogContent;
     });

     this.bs.getH8().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h8=this?.blog?.BlogContent;
     });


     this.bs.getH9().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h9=this?.blog?.BlogContent;
     });

     this.bs.getH10().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h10=this?.blog?.BlogContent;
     });

     this.bs.getH11().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h11=this?.blog?.BlogContent;
     });

     this.bs.getH12().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h12=this?.blog?.BlogContent;
     });

     this.bs.getH13().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h13=this?.blog?.BlogContent;
     });

     this.bs.getH14().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h14=this?.blog?.BlogContent;
     });

     this.bs.getH15().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h15=this?.blog?.BlogContent;
     });

     this.bs.getH16().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h16=this?.blog?.BlogContent;
     });

     this.bs.getH17().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h17=this?.blog?.BlogContent;
     });

     this.bs.getH18().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h18=this?.blog?.BlogContent;
     });

     this.bs.getH19().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h19=this?.blog?.BlogContent;
     });

     this.bs.getH20().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h20=this?.blog?.BlogContent;
     });

     this.bs.getH21().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h21=this?.blog?.BlogContent;
     });

     this.bs.getH22().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h22=this?.blog?.BlogContent;
     });

     this.bs.getH23().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h23=this?.blog?.BlogContent;
     });

     this.bs.getH24().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h24=this?.blog?.BlogContent;
     });

     this.bs.getH25().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h25=this?.blog?.BlogContent;
     });
     this.bs.getH26().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h26=this?.blog?.BlogContent;
     });

     this.bs.getH27().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h27=this?.blog?.BlogContent;
     });


     this.bs.getH28().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h28=this?.blog?.BlogContent;
     });

     this.bs.getH29().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h29=this?.blog?.BlogContent;
     });


     this.bs.getH30().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h30=this?.blog?.BlogContent;
     });


     this.bs.getH31().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h31=this?.blog?.BlogContent;
     });

     this.bs.getH32().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h32=this?.blog?.BlogContent;
     });

     this.bs.getH33().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h33=this?.blog?.BlogContent;
     });

     this.bs.getH34().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h34=this?.blog?.BlogContent;
     });

     this.bs.getH35().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h35=this?.blog?.BlogContent;
     });
     this.bs.getH58().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h58=this?.blog?.BlogContent;
     });

     this.bs.getH59().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h59=this?.blog?.BlogContent;
     });

     this.bs.getH60().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h60=this?.blog?.BlogContent;
     });

     this.bs.getH61().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h61=this?.blog?.BlogContent;
     });
     this.bs.getH62().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h62=this?.blog?.BlogContent;
     });
     this.bs.getH63().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h63=this?.blog?.BlogContent;
     });
     this.bs.getH64().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h64=this?.blog?.BlogContent;
     });
     this.bs.getH65().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h65=this?.blog?.BlogContent;
     });
     this.bs.getH66().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h66=this?.blog?.BlogContent;
     });
     this.bs.getH67().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h67=this?.blog?.BlogContent;
     });

     this.bs.getH68().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h68=this?.blog?.BlogContent;
     });

     this.bs.getH69().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h69=this?.blog?.BlogContent;
     });

     this.bs.getH70().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h70=this?.blog?.BlogContent;
     });

     this.bs.getH71().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h71=this?.blog?.BlogContent;
     });
     this.bs.getH72().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h72=this?.blog?.BlogContent;
     });

     this.bs.getH73().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h73=this?.blog?.BlogContent;
     });

     this.bs.getH74().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h74=this?.blog?.BlogContent;
     });

     this.bs.getH75().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h75=this?.blog?.BlogContent;
     });


     this.bs.getH76().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h76=this?.blog?.BlogContent;
     });


     this.bs.getH77().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h77=this?.blog?.BlogContent;
     });

     this.bs.getH78().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h78=this?.blog?.BlogContent;
     });

     this.bs.getH79().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h79=this?.blog?.BlogContent;
     });
     this.bs.getH80().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h80=this?.blog?.BlogContent;
     });

   }
  initScrollAnimation():void {
    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)',
      duration: 1.5,

    });

    gsap.to(this.document.querySelector('.heading-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-2'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-3'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-4'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-4'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text1'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-5'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-5'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-6'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-6'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-7'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-7'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });

    gsap.to(this.document.querySelector('.heading-8'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-8'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });

    gsap.to(this.document.querySelector('.heading-9'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-9'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-10'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-10'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-11'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-11'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-12'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-12'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-13'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-13'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-14'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-14'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text2'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
   }

  showMessage() {
    this.shared.currentMessage.subscribe(msg => this.message = msg);
    console.log('this is the message from secure show'+ this.message);



    this.shared.changeMessage(this.message);

      this.username = localStorage.getItem("CurrentUsername");
      this.usermail = localStorage.getItem("CurrentUserEmail");
      console.log('this is the message from secure show dataaaaaaaaaaa  '+this.data );
      console.log("data");
      console.log(this.data);
      console.log("data");
  }
  get f(){
    return this.myform.controls;
   }
  logout1(){
    this.authService.logout();
  }
  MoveToUpload(){
    this.router.navigateByUrl('/UploadFile');

  }
  getFil1( event : any){
    this.file= event.target.files[0];

 }

 submitData(){
   let formData =new FormData();
   this.username = localStorage.getItem("CurrentUsername");
   this.startUpload=true;
   formData.set('CompanyName',this.username);
   formData.set('pdf',this.file);
   console.log(this.file);

   this.http.post('http://127.0.0.1:8000/public/UF/',formData,{
    reportProgress:true,
    observe:'events'
  }).subscribe((event)=>{
    if(event.type==HttpEventType.UploadProgress ){
        this.total = event.total;

      console.log('Upload Progress :'+Math.round(event.loaded / this.total * 100) +'%');
      this.progress=Math.round(event.loaded / this.total * 100) +'%';
    }
    else if(event.type==HttpEventType.Response){
      console.log(event);
      this.uploaded=true;
      this.startUpload=false;
    }


    })
 }
 initAnimation():void {


}
homepage(){
  this.router.navigate(['/'])  .then(() => {
    window.location.reload();
  });
}
}



