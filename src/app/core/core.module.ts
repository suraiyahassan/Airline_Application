import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthComponent, HeaderComponent, FooterComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    RouterModule
  ],
  exports: [
    AuthComponent, HeaderComponent, FooterComponent, LoginComponent, SignUpComponent

  ]
})
export class CoreModule { }
