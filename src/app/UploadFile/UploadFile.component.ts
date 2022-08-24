import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { UploadFileService } from '../UploadFile.service';
import { Injectable } from '@angular/core'; // at top
import { BlogService } from '../Blog.service';

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

  constructor(private uf :UploadFileService ,private http:HttpClient , public shared : SharedService,private bs :BlogService) { }

  ngOnInit() {
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

  get f(){
    return this.myform.controls;
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

    this.http.post('https://utecweb.herokuapp.com/public/UF/',formData,{
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

}

