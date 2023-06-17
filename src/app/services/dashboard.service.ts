import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonResponse } from '../models/public.interface';
import { SeleccionarUltimoVistoResponse } from '../models/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url=environment.server_url

  constructor(private http:HttpClient) { }

  getUltimoVisto(){
    return this.http.get<CommonResponse<SeleccionarUltimoVistoResponse>>(`${this.url}/private/cursos/seleccionarUltimoVisto`)
  }
}
