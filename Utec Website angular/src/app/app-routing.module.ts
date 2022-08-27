import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './AccessDenied/AccessDenied.component';
import { OurStoryComponent } from './OurStory/OurStory.component';
import { ProductsComponent } from './Products/Products.component';
import { PublicComponent } from './public/public.component';
import { RigesterComponent } from './Rigester/Rigester.component';
import { SecureComponent } from './secure/secure.component';
import { UloginComponent } from './Ulogin/Ulogin.component';
import { UploadFileComponent } from './UploadFile/UploadFile.component';

const routes: Routes = [
{ path:'', component : PublicComponent  },
{path:'secure', component : SecureComponent  },
{path:'Ulogin', component : UloginComponent  },
{path:'Rigester', component : RigesterComponent  },
{path:'UploadFile', component : UploadFileComponent  },
{path:'OurStory', component : OurStoryComponent  },
{path:'Products', component : ProductsComponent  },
{path:'AccessDenied', component : AccessDeniedComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
