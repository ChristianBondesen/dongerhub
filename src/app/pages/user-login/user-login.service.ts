import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/auth-models/login-user';
import { Token } from '../../models/auth-models/token';

@Injectable()
export class UserLoginService {
  constructor(private http: HttpClient) { }

  UserLogin(user: User): Observable<Token> {
    return this.http.post<Token>('api/auth', user);
  }
  UserRegister(user: User): Observable<object> {
    return this.http.post('api/users', user);
  }
}
