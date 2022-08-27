import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../Blog.service';
import { RigesterService } from '../Rigester.service';

@Component({
  selector: 'app-Rigester',
  templateUrl: './Rigester.component.html',
  styleUrls: ['./Rigester.component.css'],  encapsulation: ViewEncapsulation.None,
})
export class RigesterComponent implements OnInit {
  myform!: FormGroup;
  rl!: any ;
  check!: boolean ;
  missing!:boolean;
  blog:any;
  h85:any;
  h86:any;
  h87:any;
  h88:any;
  h89:any;
  h90:any;
  h91:any;
  h92:any;
  h93:any;


  constructor(private authService:AuthService , private router: Router ,private rig :RigesterService,private bs :BlogService ) {
    this.check=false;
    this.missing=false;
   }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this.myform =new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
   });
   this.showBlog();
  }

 get f(){
  return this.myform.controls;
 }

 Register(){
 this.rig.Rigester(this.f['username'].value, this.f['password'].value).subscribe(d=>{
  alert("Registration Request Successful ,We've received your registration request and are processing your application. You will receive an email with your login details once your registration is approved.Thank you for your patience  ");
    this.router.navigateByUrl("");
  },
  (error:any)=>{console.log(error); if(error.status==400){ this.missing=true;} } );

 }

 showBlog(){
  this.bs.getH85().subscribe(d=>{
    this.blog=d,
   this.h85=this?.blog?.BlogContent;
   });
   this.bs.getH86().subscribe(d=>{
    this.blog=d,
   this.h86=this?.blog?.BlogContent;
   });
   this.bs.getH87().subscribe(d=>{
    this.blog=d,
   this.h87=this?.blog?.BlogContent;
   });
   this.bs.getH88().subscribe(d=>{
    this.blog=d,
   this.h88=this?.blog?.BlogContent;
   });

   this.bs.getH89().subscribe(d=>{
    this.blog=d,
   this.h89=this?.blog?.BlogContent;
   });

   this.bs.getH90().subscribe(d=>{
    this.blog=d,
   this.h90=this?.blog?.BlogContent;
   });

   this.bs.getH91().subscribe(d=>{
    this.blog=d,
   this.h91=this?.blog?.BlogContent;
   });
   this.bs.getH92().subscribe(d=>{
    this.blog=d,
   this.h92=this?.blog?.BlogContent;
   });

   this.bs.getH93().subscribe(d=>{
    this.blog=d,
   this.h93=this?.blog?.BlogContent;
   });
  }
}
