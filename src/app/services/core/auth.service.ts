import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = "http://localhost:9090/fiscalizacao-api/"
@Injectable({
  providedIn: 'root'
})

export class AuthService {
 

  constructor(private http: HttpClient) { }


  authenticate(username:string, password: string){
    return this.http.post(API_URL + 'auth/',{login:username,senha:password})
  }
}
 