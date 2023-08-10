import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/public.interface';
import { SeleccionarCursoByIdResponse } from 'src/app/models/responses-api.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  idCurso:string=''
  detalleCurso = {} as SeleccionarCursoByIdResponse
  curso = {} as Curso;

  constructor(private router:Router,private route:ActivatedRoute,private cursoService:CursosService) { }

  ngOnInit(): void {
    this.idCurso=this.route.snapshot.paramMap.get('id_curso')!
    console.log(this.idCurso);
    this.cursoService.getDetalleCurso(this.idCurso).subscribe(dato=>{
      console.log(dato);
      this.detalleCurso=dato.response
    })
    this.cursoService.getContenidoCurso(this.idCurso).subscribe(dato=>{
      console.log(dato);
      this.curso=dato.response[0]
    })
  }

  regresar(){
    this.router.navigateByUrl(`/private`)
  }

}
