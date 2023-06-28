import { Component, Input, OnInit } from '@angular/core';
import { SeleccionarSuscripcionesUsuarioResponse } from 'src/app/models/dashboard.interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  @Input('cursos') listaCursos : SeleccionarSuscripcionesUsuarioResponse[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
