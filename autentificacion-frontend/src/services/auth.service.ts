import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private userData = new BehaviorSubject<any>({});

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/users/login', { email, password })
    // http://localhost:3000/users/login
    // {
    //   "email": "test2@example.com",
    //   "password": "password123"
    // }
  }

  register(email: string, name: string, password: string) {
    return this.http.post<any>('http://localhost:3000/users/register', { email, name, password })
  }

  setUserData(data: any) {
    this.userData.next(data);
    console.log(this.userData)
  }

  getUserData() {
    console.log(this.userData.asObservable())
    return this.userData;
  }

}
