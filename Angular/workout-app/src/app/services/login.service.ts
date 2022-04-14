import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:4000/login/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  postUser(user: any){
    return this.http.post(baseUrl,user)
  }
}
