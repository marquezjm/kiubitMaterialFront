import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

interface Curso{
  id:string,
  imagen:string,
  descripcion:string,
  sesiones:number,
  duracion:Duracion,
  idioma:string,
  certificado:boolean,
  titulo:string,
}

interface Duracion{
  horas:number,
  minutos:number,
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  
  curso!:Curso

  constructor(public modalRef: MdbModalRef<CursoComponent>) { }

  ngOnInit(): void {
  }

}
