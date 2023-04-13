import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonResponse, Curso } from '../models/public.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  url=environment.server_url

  constructor(private http:HttpClient) { }

  getCursos(){
    return this.http.get<CommonResponse<Curso[]>>(`${this.url}/public/cursos`)
  }
}
