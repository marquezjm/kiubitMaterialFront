import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse } from '../models/login.interface';
import { CommonResponse } from '../models/public.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUrl=`${environment.server_url}/auth`

  constructor(private http:HttpClient) { }

  login(loginUsuario:LoginRequest){
    return this.http.post<CommonResponse<LoginResponse>>(`${this.authUrl}/authenticate`,loginUsuario)
  }

}
