import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../Blog.service';

@Component({
  selector: 'app-OurStory',
  templateUrl: './OurStory.component.html',
  styleUrls: ['./OurStory.component.css'],  encapsulation: ViewEncapsulation.None
})
export class OurStoryComponent implements OnInit {
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
  h36:any;
  h37:any;
  h38:any;
  h39:any;
  h40:any;
  h41:any;
  h42:any;
  h43:any;
  h44:any;
  h45:any;
  h46:any;
  h47:any;
  h48:any;
  h49:any;
  h50:any;
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

  constructor(private router: Router,private authService:AuthService,private bs :BlogService ,) { }

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
    this.showBlog();
  }
  homepage(){
    this.router.navigate(['/'])  .then(() => {
      window.location.reload();
    });
  }
  logout1(){
    this.authService.logout();
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


     this.bs.getH36().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h36=this?.blog?.BlogContent;
     });
     this.bs.getH37().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h37=this?.blog?.BlogContent;
     });
     this.bs.getH38().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h38=this?.blog?.BlogContent;
     });
     this.bs.getH39().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h39=this?.blog?.BlogContent;
     });
     this.bs.getH40().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h40=this?.blog?.BlogContent;
     });
     this.bs.getH41().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h41=this?.blog?.BlogContent;
     });

     this.bs.getH42().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h42=this?.blog?.BlogContent;
     });
     this.bs.getH43().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h43=this?.blog?.BlogContent;
     });
     this.bs.getH44().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h44=this?.blog?.BlogContent;
     });
     this.bs.getH45().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h45=this?.blog?.BlogContent;
     });
     this.bs.getH46().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h46=this?.blog?.BlogContent;
     });
     this.bs.getH47().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h47=this?.blog?.BlogContent;
     });
     this.bs.getH48().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h48=this?.blog?.BlogContent;
     });
     this.bs.getH49().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h49=this?.blog?.BlogContent;
     });

     this.bs.getH50().subscribe(d=>{
      this.blog=d,
      console.log(this.blog);
      console.log('hello this is H1 content'+this?.blog?.BlogTitle);
     this.h50=this?.blog?.BlogContent;
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
}
