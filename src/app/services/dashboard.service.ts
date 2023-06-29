import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonResponse } from '../models/public.interface';
import { SeleccionarSuscripcionesUsuarioResponse, SeleccionarUltimoVistoResponse } from '../models/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url='api'//environment.server_url

  constructor(private http:HttpClient) { }

  getUltimoVisto(){
    return this.http.get<CommonResponse<SeleccionarUltimoVistoResponse>>(`${this.url}/private/cursos/seleccionarUltimoVisto`)
  }

  getSuscripciones(){
    return this.http.get<CommonResponse<SeleccionarSuscripcionesUsuarioResponse[]>>(`${this.url}/private/cursos/seleccionarSuscripcionesUsuario`)
  }

  getRecomendados(){
    return this.http.get<CommonResponse<SeleccionarSuscripcionesUsuarioResponse[]>>(`${this.url}/private/cursos/seleccionarRecomendados`)
  }
}
