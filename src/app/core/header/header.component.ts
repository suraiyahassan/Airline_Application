import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/shared/model/role.model';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(public loginService: AuthenticationService,
    private router: Router) { 
      this.loginService.currentUser.subscribe(x => this.currentUser = x);
      
    }

  ngOnInit(): void {
  }

  get isAdmin() {
    
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

logOut(){
  this.loginService.logOut();
    this.router.navigate(['login']);
}

}
