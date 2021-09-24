import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent,
    CategoriesComponent,
 
  ]
})
export class NavbarModule { }
