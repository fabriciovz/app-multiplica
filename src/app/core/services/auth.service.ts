import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from "rxjs";
import { map,tap } from 'rxjs/operators';

import { UserLogin } from "../models/user-login.model";
import { User } from "../models/user.model";

import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(private http: HttpClient, 
    private router: Router,
    private tokenService: TokenService
    ) { 
    let user_local = <string>localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<User>(JSON.parse(user_local));
    this.user = this.userSubject.asObservable();
  }

  login(user: UserLogin){

    let authorizationData = 'Basic ' + btoa(user.username + ':' + user.password);

    const headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': authorizationData
        })
    };

    return this.http.post<any>(`${environment.url_api}/auth/token`,{}, headerOptions )
    .pipe(
      tap((data: {access_token: string}) => {
          const token = 'Bearer '+ data.access_token;
          this.tokenService.saveToken(token);   
          //this.userSubject.next(user);
      }
      ));
  }
  logout() {
    this.tokenService.removeToken();
    //this.userSubject.next(user);
    this.router.navigate(['login']);
  }
  public get userValue(): User {
    return this.userSubject.value;
}
}
