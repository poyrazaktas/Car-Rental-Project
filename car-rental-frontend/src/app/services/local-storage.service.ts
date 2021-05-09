import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  currentCustomer: Customer;

  constructor() {}

  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  setToken(token) {
    localStorage.setItem('token', token);
  }

  // tslint:disable-next-line:typedef
  removeToken() {
    localStorage.removeItem('token');
  }

  // tslint:disable-next-line:typedef
  getUser() {
    return localStorage.getItem('user');
  }

  // tslint:disable-next-line:typedef
  setUser(user) {
    localStorage.setItem('user', user);
  }

  // tslint:disable-next-line:typedef
  removeUser() {
    localStorage.removeItem('user');
  }

  refresh(): void {
    window.location.reload();
  }
}
