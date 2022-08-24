import { BlogService } from './../Blog.service';
import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { PopupService } from '../Popup.service';
import { RigesterService } from '../Rigester.service';
import {gsap} from  'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],  encapsulation: ViewEncapsulation.None

})
export class PublicComponent implements OnInit {
  images = ['../assets/indust.png', '../assets/infra.png', '../assets/indust.png'];

  msg:any ;
  blog:any;
  btitle:any;
  h1:any;
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

  title1='this is title' ;
  popup:any;
  popupContent:any;
  @ViewChild(' menu' ,   { static: true })   menu!: ElementRef<HTMLDivElement>;
  @ViewChild('message' , { static: true })  message!: ElementRef<HTMLDivElement>;
  @ViewChild('message2', { static: true }) message2!: ElementRef<HTMLDivElement>;
  @ViewChild('message3', { static: true }) message3!: ElementRef<HTMLDivElement>;
  @ViewChild('message4', { static: true }) message4!: ElementRef<HTMLDivElement>;
  @ViewChild('message5', { static: true }) message5!: ElementRef<HTMLDivElement>;
  username!: string | null;

constructor( private router: Router,private pService :MyServiceService ,private bs :BlogService ,private pu :PopupService ,private rig :RigesterService ,@Inject(DOCUMENT) private document :Document){}

  title = 'Demo';
  div1:boolean=true;
  closewin(){
    this.div1=false;
  }
  ngOnInit(): void {
    this.showMessage();
    this.showBlog();
    this.showpop();
    this.initScrollAnimation();
    this.initAnimation();
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

    this.username = localStorage.getItem("CurrentUsername");
    if(this.username){

     this.router.navigate(['/secure'])  .then(() => {
       window.location.reload();
     });
    }

  }
  closeRightMenu(){
    (document.querySelector('#rightMenu') as HTMLElement).style.display = "none";
  }
  openRightMenu(){
    (document.querySelector('#rightMenu') as HTMLElement).style.display = "block";
  }
  homepage(){
    this.router.navigate(['/'])  .then(() => {
      window.location.reload();
    });
  }
  showMessage(){
    this.pService.getmassage().subscribe(data=>{
     this.msg=data    });
   }

   showBlog(){

    this.bs.getH1().subscribe(d=>{
     this.blog=d,
    this.h1=this?.blog?.BlogContent;
    });

    this.bs.getH2().subscribe(d=>{
      this.blog=d,
     this.h2=this?.blog?.BlogContent;
     });

    this.bs.getH3().subscribe(d=>{
      this.blog=d,
     this.h3=this?.blog?.BlogContent;
     });


     this.bs.getH4().subscribe(d=>{
      this.blog=d,
     this.h4=this?.blog?.BlogContent;
     });

     this.bs.getH5().subscribe(d=>{
      this.blog=d,
     this.h5=this?.blog?.BlogContent;
     });

     this.bs.getH6().subscribe(d=>{
      this.blog=d,
     this.h6=this?.blog?.BlogContent;
     });

     this.bs.getH7().subscribe(d=>{
      this.blog=d,
     this.h7=this?.blog?.BlogContent;
     });

     this.bs.getH8().subscribe(d=>{
      this.blog=d,
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

   showpop(){
    this.pu.getmassage().subscribe(d=>{
     this.popup=d,
     console.log(this.popup);
     console.log('hello this is blog content'+this?.popup?.BlogContent);
    this.popupContent=this?.popup?.BlogContent;
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
    gsap.to(this.document.querySelector('.text2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text2'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text3'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text4'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text4'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text5'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text5'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.001)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text6'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text6'),
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
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-10'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-10'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-11'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-11'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-12'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-12'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-13'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-13'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.heading-14'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-14'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.text2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.text2'),
        scrub: true,
        start: '150% center',
      } ,
      color: 'rgb(255,255,255,0.1)' ,
      duration: 1.5,
    });


   }
   initAnimation():void {


  }

}

/*
video
<div>
  <video width="400" class="vid1" controls>
    <source src="../assets/tst.mp4" type="video/mp4">
  </video>
</div>
*/
/*
pop UP massage
<section>
  <div class="MainAlret" *ngIf="div1">
    <span class="closebtn" (click)="closewin()">&times;</span>
    <p><strong>&ensp;Warning!</strong> {{ popupContent }}</p>
    <div><img src="../assets/utec logo.png"></div>
  </div>
</section>

*/
