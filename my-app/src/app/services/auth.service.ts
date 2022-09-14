import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  rand = () => {
    return Math.random().toString(36).substr(2);
  };

  token = () => {
    return this.rand() + this.rand();
  };

  Login(name: string, password: string) {
    localStorage.setItem('user_name', name);
    localStorage.setItem('password', password);
    const token = this.token();
    localStorage.setItem('token', token);
  }

  Logout() {
    localStorage.clear();
  }

  IsAuthenticated() {
    return localStorage.getItem('user_name') as unknown as boolean;
  }

  GetUserInfo() {
    return localStorage.getItem('user_name');
  }
}
