import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

interface Servicio{
  url:string,
  imagen:string,
  titulo:string,
  texto:string
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios:Servicio[]=[
    {url:'coaching',imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000005-52e8853f0a/Imagen6.png?ph=ff636f43e6',titulo:'Coaching Educativo',texto:'Analizamos la situación de cada alumno y lo asesoramos de acuerdo a sus necesidades, además de contar con diferentes etapas de evaluación en el proceso de aprendizaje. '},
    {url:'cursos',imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000011-e522ce6151/icono1.png?ph=ff636f43e6',titulo:'Cursos de Matemáticas',texto:'¿Tienes problemas en matemáticas? Nosotros te ayudamos a reforzar tus conocimientos en diversas áreas como Aritmética, Álgebra, Geometría, etc.'},
    {url:'preparacion',imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000017-160b617089/unnamed.png?ph=ff636f43e6',titulo:'Preparación en Matemáticas para examen de admisión',texto:'Puedes estudiar durante todo el año, ya sea para entrar a secundaria, preparatoria o universidad. ¡Apúntate ya!'},
    {url:'regularizacion',imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000016-5ebb75fb72/ue_biblioteca-mediateca-icono_dc.png?ph=ff636f43e6',titulo:'Regularización',texto:'Nuestras clases particulares están diseñadas de acuerdo a las necesidades de cada alumno con la finalidad de incrementar sus conocimientos en matemáticas.'},
    {url:'taller',imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000020-77d4d78cf2/tarea.png?ph=ff636f43e6',titulo:'Taller de tareas',texto:'¿Tienes tarea de matemáticas? Te ayudamos a ejercitar e incrementar tu capacidad de razonamiento al resolver diferentes  ejercicios.'},
  ]

  constructor(public navbarService:NavbarService) { }

  ngOnInit(): void {
  }

}
