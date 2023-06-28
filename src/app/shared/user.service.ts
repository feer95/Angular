import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url: string = 'http://localhost:3000'; 
  public logueado: boolean = false;
  public user: User;
  public logueadoId : Number;


  constructor(private http: HttpClient) {
    this.logueado = false;
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

  

}

