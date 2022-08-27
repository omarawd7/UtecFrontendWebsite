import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { BlogService } from '../Blog.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-UploadFile',
  templateUrl: './UploadFile.component.html',
  styleUrls: ['./UploadFile.component.css'],encapsulation: ViewEncapsulation.None,
})
export class UploadFileComponent implements OnInit {
  myform!: FormGroup;
   file:any;
  username!: any;
  total:any;
  uploaded: boolean = false;
  startUpload: boolean = false;
  progress:any;
  h93:any;
  blog:any;
  user: any;
  validate!: boolean;

  constructor( private http:HttpClient , public shared : SharedService,private bs :BlogService ,private authService:AuthService,private router: Router) { }

  ngOnInit() {
    this.validate=true;
    this.user=localStorage.getItem("CurrentUser");
    this.user=JSON.parse(this.user);

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

    this.myform =new FormGroup({
      newfile : new FormControl(''),
   });
   this.showBlog();
  }
  showBlog(){

    this.bs.getH93().subscribe(d=>{
      this.blog=d,

     this.h93=this?.blog?.BlogContent;
     });

  }

  getFil1( event : any){
     this.file= event.target.files[0];
  }

  submitData(){
    let formData =new FormData();
    this.username = this.user.username;//getting the current username
    this.startUpload=true; //true while the upload not finished
    formData.set('CompanyName',this.username); //setting the username
    formData.set('pdf',this.file);//setting the username and pdf


    this.http.post('http://127.0.0.1:8000/public/UF/',formData,{
     reportProgress:true,
     observe:'events'
   }).subscribe((event)=>{
     if(event.type==HttpEventType.UploadProgress ){
         this.total = event.total;//total file size
         this.progress=Math.round(event.loaded / this.total * 100) +'%';
     }
     else if(event.type==HttpEventType.Response){ //is the file succesfully uploaded
       console.log(event);
       this.uploaded=true;
       this.startUpload=false;
     }
     })
  }

}

