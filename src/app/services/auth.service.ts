import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://florcollosso.us-east-1.elasticbeanstalk.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}
