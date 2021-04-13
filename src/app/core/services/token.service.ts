import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
    //console.log(JSON.stringify(token));
    localStorage.setItem('access_token', token)
  }
  getToken() {
    return localStorage.getItem('access_token')
  }
  removeToken() {
    localStorage.removeItem('access_token');
  }
}
