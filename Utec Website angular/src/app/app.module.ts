import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { UloginComponent } from './Ulogin/Ulogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RigesterComponent } from './Rigester/Rigester.component';
import { UploadFileComponent } from './UploadFile/UploadFile.component';
import { OurStoryComponent } from './OurStory/OurStory.component';
import { ProductsComponent } from './Products/Products.component';
import { AccessDeniedComponent } from './AccessDenied/AccessDenied.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [

      AppComponent,
      PublicComponent,
      SecureComponent,
      UloginComponent,
      RigesterComponent,
      UploadFileComponent,
      OurStoryComponent,
      ProductsComponent,
      AccessDeniedComponent
   ],
  imports: [
    NgbCarouselModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
