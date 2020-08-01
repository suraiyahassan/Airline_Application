import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }
logOut(){
  this.loginService.logOut();
    this.router.navigate(['login']);
}

}
