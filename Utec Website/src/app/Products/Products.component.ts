import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../Blog.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],  encapsulation: ViewEncapsulation.None ,
})
export class ProductsComponent implements OnInit {
  validate!: boolean;
  username!: string | null;
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
  h51:any;
  h52:any;
  h53:any;
  h54:any;
  h55:any;
  h56:any;
  h57:any;
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





  constructor(private router: Router,private authService:AuthService,private bs :BlogService) { }
  ngOnInit() {
    this.validate=false;
    this.username = localStorage.getItem("CurrentUsername");
    if(this.username){
      this.validate=true;
    }else{
      this.validate=false;
    }
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this. showBlog();
  }
  showBlog(){



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
     this.bs.getH51().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h51=this?.blog?.BlogContent;
     });
     this.bs.getH52().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h52=this?.blog?.BlogContent;
     });
     this.bs.getH53().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h53=this?.blog?.BlogContent;
     });
     this.bs.getH54().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h54=this?.blog?.BlogContent;
     });

     this.bs.getH55().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h55=this?.blog?.BlogContent;
     });

     this.bs.getH56().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h56=this?.blog?.BlogContent;
     });

     this.bs.getH57().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h57=this?.blog?.BlogContent;
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




   }
  homepage(){
    this.router.navigate(['/'])  .then(() => {
      window.location.reload();
    });
  }
  logout1(){
    this.authService.logout();
  }
}
