import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    FooterComponent,
    ContactUsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NavbarModule,
     NgbModule,
     BrowserAnimationsModule,
     MaterialModule,

    
     
  ],
  exports:[FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
