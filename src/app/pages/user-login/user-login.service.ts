import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/auth-models/login-user';
import { Token } from '../../models/auth-models/token';
import { Router } from '@angular/router';

@Injectable()
export class UserLoginService {
  constructor(private http: HttpClient, private router: Router) { }

  UserLogin(user: User): Observable<Token> {
    return this.http.post<Token>('api/auth', user);
  }
  UserRegisterAndLogin(user: User) {
    this.http.post<User>('api/users', user).subscribe(data => {
      this.Login(data);
    });
  }

  Login(user: User) {
    this.UserLogin(user).subscribe(data => {
      if (data.success) {
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      } else {
        this.router.navigateByUrl('/user-login');
      }
    });
  }
}
