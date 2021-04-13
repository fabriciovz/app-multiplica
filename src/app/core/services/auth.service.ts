import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { UserLogin } from "../models/user-login.model";
import { User } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(private http: HttpClient, private router: Router,
    ) { 
    let user_local = <string>localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<User>(JSON.parse(user_local));
    this.user = this.userSubject.asObservable();
  }

  login(user: UserLogin){
    return this.http.post<User>(`${environment.url_api}/auth/token`,user)
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
    }));
  }
  logout() {
    // remove user from local storage and set current user to null
    let user: User = {username: '0',password:'0'};
    localStorage.removeItem('user');
    this.userSubject.next(user);
    this.router.navigate(['/login']);
  }
  public get userValue(): User {
    return this.userSubject.value;
}
}
