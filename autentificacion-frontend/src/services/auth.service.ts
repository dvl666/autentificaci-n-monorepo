import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/users/login', { email, password })
    // http://localhost:3000/users/login
    // {
    //   "email": "test2@example.com",
    //   "password": "password123"
    // }
  }

}
