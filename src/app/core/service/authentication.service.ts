import { Injectable } from '@angular/core';
import { Role } from 'src/app/shared/model/role.model';
import { User } from 'src/app/shared/model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  private user : User={role:null};

  constructor() { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  authenticate(username, password) {
   
    if (username === "admin" && password === "admin") {
      
      this.user.role=Role.Admin
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('currentUser', JSON.stringify(this.user));
      this.currentUserSubject.next(this.user);
      
      return true;
    } 
    else if (username === "user" && password === "user") {
      this.user.role=Role.User;
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('currentUser', JSON.stringify(this.user));
      this.currentUserSubject.next(this.user);
      return true;
    } 
    
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    
    return !(user === null)
  }

  hasRole(role: Role) {
    return this.isUserLoggedIn() && this.user.role === role;
}

  logOut() {
    sessionStorage.removeItem('username');
    
    sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
  }
}
