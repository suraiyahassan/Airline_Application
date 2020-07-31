import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/component/login.component';
import { SignUpComponent } from './auth/sign-up/component/sign-up.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    CoreRoutingModule,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent
  ],
})
export class CoreModule {}
