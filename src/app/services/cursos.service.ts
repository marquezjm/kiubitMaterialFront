import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonResponse, Curso } from '../models/public.interface';
import { SeleccionarCursoByIdResponse } from '../models/responses-api.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  url='api'//environment.server_url

  constructor(private http:HttpClient) { }

  getCursos(){
    return this.http.get<CommonResponse<Curso[]>>(`${this.url}/public/cursos`)
  }

  getDetalleCurso(idCurso:string){
    return this.http.get<CommonResponse<SeleccionarCursoByIdResponse>>(`${this.url}/private/cursos/seleccionarCursoById/${idCurso}`)
  }

  getContenidoCurso(idCurso:string){
    return this.http.get<CommonResponse<Curso[]>>(`${this.url}/private/cursos/selectContenidoCurso/${idCurso}`)
  }
}
