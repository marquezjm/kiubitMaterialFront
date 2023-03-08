import { Component, OnInit } from '@angular/core';

interface Testimonio {
  sexo:string,
  texto:string,
  nombre:string,
}

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {

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
