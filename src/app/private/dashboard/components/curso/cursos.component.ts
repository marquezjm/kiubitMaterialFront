import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeleccionarSuscripcionesUsuarioResponse } from 'src/app/models/dashboard.interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  @Input('cursos') listaCursos : SeleccionarSuscripcionesUsuarioResponse[]=[]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  abrirCurso(id:string){
    this.router.navigateByUrl(`/private/curso/${id}`)
  }

}
