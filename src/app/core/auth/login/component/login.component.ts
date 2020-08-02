import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public invalidLogin: boolean =false ;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  username : string;
  password: string;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {

  }

  checkLogin() {
   
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['/home'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }


}
