import { Component, OnInit } from '@angular/core';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CursoComponent } from 'src/app/modals/curso/curso.component';
import { NavbarService } from 'src/app/services/navbar.service';

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
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos:Curso[]=[
    {id:'1',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000651-b85b0b85b3/1ro%20sec.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas.',
    duracion:{
      horas:10,
      minutos:11,
    },
    sesiones:30,
    idioma:'Español',
    certificado:true,
    titulo:'1ro de Secundaria'},
    {id:'2',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000652-2631226315/2do%20sec.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas. ',
    duracion:{
      horas:5,
      minutos:30,
    },
    sesiones:25,
    idioma:'Español',
    certificado:true,
    titulo:'2do de Secundaria'},
    {id:'3',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000653-03acc03acf/3ro%20sec.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas.',
    duracion:{
      horas:8,
      minutos:0,
    },
    sesiones:15,
    idioma:'Español',
    certificado:true,
    titulo:'3ro de Secundaria'},
    {id:'4',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000654-5b46c5b46f/1ro%20prepa.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas.',
    duracion:{
      horas:9,
      minutos:40,
    },
    sesiones:13,
    idioma:'Español',
    certificado:false,
    titulo:'1ro de Preparatoria'},
    {id:'5',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000655-ab0d2ab0d4/2do%20prepa.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas.',
    duracion:{
      horas:6,
      minutos:22,
    },
    sesiones:27,
    idioma:'Español',
    certificado:true,
    titulo:'2do de Preparatoria'},
    {id:'6',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000656-ad51aad51d/2ro%20preparatoria.PNG?ph=ff636f43e6',
    descripcion:'Con este curso podrás reafirmar y extender tus conocimientos en matemáticas para poder relacionarlos con otras áreas temáticas. El contenido está estructurado de tal forma que el estudiante aprenda matemáticas de una manera muy sencilla a través del microlearning a su propio ritmo. El propósito es que logres construir modelos algebraicos que representen problemas cotidianos, utilizando lenguaje algebraico, operaciones, ecuaciones y sistemas; así como funciones lineales y cuadráticas.',
    duracion:{
      horas:23,
      minutos:54,
    },
    sesiones:35,
    idioma:'Español',
    certificado:false,
    titulo:'3ro de Preparatoria'},
  ]

  constructor(public navbarService:NavbarService,private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openModal(curso:Curso) {
     this.modalService.open(CursoComponent,{data:{curso:curso},modalClass:'modal-dialog-centered'})
  }

}
