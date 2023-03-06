import { Component, OnInit } from '@angular/core';

interface Curso {
  image:string,
  titulo:string
}

interface Testimonio {
  sexo:string,
  texto:string,
  nombre:string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos:Curso[]=[
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
  ]

  testimonios:Testimonio[]=[
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'M',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
    {sexo:'F',texto:'”Excelente persona Miss Evelyn, quede muy contenta con sus clases y el costo nos permite apoyar a nuestros hijos.“',nombre:'Itzel Briseño'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
