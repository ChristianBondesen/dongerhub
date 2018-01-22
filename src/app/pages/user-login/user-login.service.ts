import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, Token } from '../../models/User';

@Injectable()
export class UserLoginService {
  constructor(private http: HttpClient) {}

  UserLogin(user: User): Observable<Token> {
    return this.http.post<Token>('api/auth', user);
  }
  UserRegister(user: User): Observable<object> {
    return this.http.post('api/users', user);
  }
}
