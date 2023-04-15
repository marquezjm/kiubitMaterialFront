import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso,Testimonio,Servicio } from '../../models/public.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaCursos:Curso[]=[]

  /*cursos:Curso[]=[
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
    {
      image:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000650-0794007942/ert.PNG?ph=ff636f43e6', titulo:'Aritmética y Álgebra'
    },
  ]*/

  testimonios:Testimonio[]=[
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'M',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
  ]

  servicios:Servicio[]=[
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000001-db4a5dc483/Imagen2.png?ph=ff636f43e6',titulo:'Precios accesibles y facilidades de pago',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000005-52e8853f0a/Imagen6.png?ph=ff636f43e6',titulo:'Coaching Educativo',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000086-51ef052f24/Atencion-personalizada.png?ph=ff636f43e6',titulo:'Amabilidad y servicio',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000088-776b278667/ICONOS-CLIENTES-01-1.png?ph=ff636f43e6',titulo:'Atención Personalizada',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000002-83336842c8/Imagen3.png?ph=ff636f43e6',titulo:'Disponibilidad de Horario',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000000-7b4fa7c473/Imagen1.png?ph=ff636f43e6',titulo:'Cursos, Talleres y Clases Particulares',texto:'Ya que sabemos todo el esfuerzo que haces por la educación de tus hijos.'},
  ]

  constructor(private cursosService:CursosService) { }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(data=>{
      if(data.success){
        this.listaCursos=data.response
      }
    })
  }

}
