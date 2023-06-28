import { Component, OnInit } from '@angular/core';
import { SeleccionarSuscripcionesUsuarioResponse, SeleccionarUltimoVistoResponse } from 'src/app/models/dashboard.interface';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ultimoVisto = {} as SeleccionarUltimoVistoResponse
  listSuscripciones:SeleccionarSuscripcionesUsuarioResponse[]=[]

  constructor(private sidenavService:SidenavService,private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getUltimoVisto().subscribe(data=>{
      if(data.success){
        this.ultimoVisto=data.response
        console.log(this.ultimoVisto);
        
      }
    })
    this.dashboardService.getSuscripciones().subscribe(data=>{
      if(data.success){
        this.listSuscripciones=data.response
        console.log(this.listSuscripciones);
        
      }
    })
  }

  click(){
    this.sidenavService.togglePrivate()
  }
}
