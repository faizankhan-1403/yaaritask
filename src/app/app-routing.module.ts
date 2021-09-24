import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'contact-us',component: ContactUsComponent},
  {path: 'about-us',component: AboutusComponent},
   {path: '', redirectTo: '/about-us', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




