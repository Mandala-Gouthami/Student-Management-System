import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
private baseUrl='http://localhost:8080/api/user/';
  constructor(private http: HttpClient) { }

  addUser(userData : any){
    return this.http.post<User>(this.baseUrl, userData);
  }
}
