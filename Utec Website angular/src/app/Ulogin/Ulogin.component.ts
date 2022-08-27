import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { BlogService } from '../Blog.service';

@Component({
  selector: 'app-Ulogin',
  templateUrl: './Ulogin.component.html',
  styleUrls: ['./Ulogin.component.css'],  encapsulation: ViewEncapsulation.None,
})
export class UloginComponent implements OnInit {
  myform!: FormGroup;
  rl!: any ;
  check!: boolean ;
  WrongPassOrUser!:boolean;
  message:string="";
  username!: string | null;
  blog:any;//content of the website h stands for header
  h77:any;
  h78:any;
  h79:any;
  h80:any;
  h81:any;
  h82:any;
  h83:any;
  h84:any;

  constructor(private authService:AuthService , private router: Router  ,public shared : SharedService,private bs :BlogService ) {
    this.check=false;
    this.WrongPassOrUser=false;
   }

  ngOnInit() {
    if (!localStorage.getItem('foo')) { //to reload the website
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this.myform =new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
   });
   this.username = localStorage.getItem("CurrentUsername");
   if(this.username){

    this.router.navigate(['/secure'])  .then(() => {
      window.location.reload();
    });

   }
this.showBlog();
  }

 get f(){
  return this.myform.controls;
 }

  onSubmit(){
    this.authService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe(
      data =>{
        if(data.Error == 400){
         this.rl='/Ulogin';
         this.router.navigateByUrl(this.rl);
         this.WrongPassOrUser=true;
       }
       else{
        this.rl='/secure';
        this.check=true;
        this.router.navigateByUrl(this.rl);
       }

      }
      ,
          (error:any)=>{console.log(error); if(error.status==400){ this.WrongPassOrUser=true;} }
      )
  }
  showBlog(){
  this.bs.getH77().subscribe(d=>{
    this.blog=d,
   this.h77=this?.blog?.BlogContent;
   });

   this.bs.getH78().subscribe(d=>{
    this.blog=d,
   this.h78=this?.blog?.BlogContent;
   });

   this.bs.getH79().subscribe(d=>{
    this.blog=d,
   this.h79=this?.blog?.BlogContent;
   });
   this.bs.getH80().subscribe(d=>{
    this.blog=d,
   this.h80=this?.blog?.BlogContent;
   });
    this.bs.getH81().subscribe(d=>{
    this.blog=d,
   this.h81=this?.blog?.BlogContent;
   });

   this.bs.getH82().subscribe(d=>{
    this.blog=d,
   this.h82=this?.blog?.BlogContent;
   });

   this.bs.getH83().subscribe(d=>{
    this.blog=d,
   this.h83=this?.blog?.BlogContent;
   });
   this.bs.getH84().subscribe(d=>{
    this.blog=d,
   this.h84=this?.blog?.BlogContent;
   });


  }

}
