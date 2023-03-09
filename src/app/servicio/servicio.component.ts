import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

interface Servicio {
  id:string,
  titulo:string,
  imagen:string,
  textoImagen:string,
  mensaje:string,
  texto:string,
}

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  servicios:Servicio[]=[
    {id:'coaching',
    titulo:'Coaching Educativo',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000624-32d9232d95/tutor.PNG?ph=ff636f43e6',
    textoImagen:'Siempre toma en cuenta que en Kiubit se te evaluará con:    Interés    Escucha activa    Atención y servicio    Paciencia',
    mensaje:'¿No sabes que es lo que le conviene reforzar a tu hijo?',
    texto:'<h4 class="text-center">¿Qué te aporta nuestro Coaching Educativo?</h4>    <p><span class="fw-bolder">1. Potencial.</span> No sólo nos centramos en tu aprendizaje, sino también en mejorar tu potencial y, una vez detectado, hacer que sea sostenible en el tiempo.</p>        <p><span class="fw-bolder">2. Conciencia.</span> Sacaremos lo mejor de ti inculcándole siempre la responsabilidad personal y fortalecimiento de tu autoestima.</p>         <p><span class="fw-bolder">3. Responsabilidad personal.</span> Cuanta más conciencia adquieras,  mayor grado de independencia tendrás y por consecuencia mayor capacidad de decisión y de resolución de problemas.</p>         <p><span class="fw-bolder">4. Feedback.</span> Te brindamos retroalimentación constante durante nuestros cursos para encaminar tu rendimiento; recuperar lo aprendido y lo experimentado.</p>'
    },
    {id:'cursos',
    titulo:'Cursos de Matemáticas',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000629-eb45eeb461/mate.PNG?ph=ff636f43e6',
    textoImagen:'',
    mensaje:'Nunca es tarde para aprender!',
    texto:'<p>Si tu hijo tiene problemas con las Matemáticas inscríbelo en alguno de los cursos que ofrecemos, estos le ayudarán a incrementar sus habilidades, a asimilar y aplicar los conceptos que creía difíciles de aprender.</p>    <p>Nuestros cursos:</p>        <ul><li>Aritmética y Álgebra</li>    <li>Geometría y trigonometría</li>    <li>Probabilidad y estadística</li>    <li>Introducción al cálculo diferencial e integral.</li>    <li>Pregunta por los horarios disponibles.</li></ul>'
    },
    {id:'preparacion',
    titulo:'Preparación en Matemáticas para Exámenes de admisión',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000626-6b48d6b491/clase.PNG?ph=ff636f43e6',
    textoImagen:'',
    mensaje:'',
    texto:'<p>Nosotros te brindamos cursos en Matemáticas para que puedas presentar sin problemas tus exámenes de admisión a la secundaria, preparatoria o universidad de tu preferencia. Nuestros cursos son muy accesibles y efectivos.</p>    <p>Cada curso abarca aproximadamente de 16 a 20 horas en donde el alumno podrá aprender lo necesario en 4 ejes:</p>        <ul><li>Temario</li>     <li>Contenido</li>    <li>Feedback</li>     <li>Ejercicios de práctica y simulación tipo examen.</li></ul>'
    },
    {id:'regularizacion',
    titulo:'Regularización',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000631-b85a5b85a8/regularizar.PNG?ph=ff636f43e6',
    textoImagen:'',
    mensaje:'Cerramos la brecha entre lo que un estudiante sabe y lo que se espera que sepa.  ',
    texto:'<p>La falta de habilidades y hábitos de estudio en los alumnos provoca un rezago en los conocimientos que se deben adquirir en la escuela.</p>    <p>Por ello Kiubit te brinda sesiones de regularización en Matemáticas que favorezcan sus hábitos y mejoren su desempeño de una manera fácil y accesible.</p>        <ul><li>El alumno podrá presentar un examen diagnóstico sin costo para ubicar las áreas que se le dificultan.</li>    <li>Repasará con su tutor asignado los temas a reforzar.</li>    <li>Se aplicarán pequeñas evaluaciones formativas para medir su progreso.</li>    <li>Se brindarán actividades de refuerzo para trabajar en casa y seguimiento constante.</li></ul>'
    },
    {id:'taller',
    titulo:'Taller de tareas',
    imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000628-677686776a/tareas.PNG?ph=ff636f43e6',
    textoImagen:'',
    mensaje:'Sin duda una actividad extra escolar muy provechosa para tus hijos!!!',
    texto:'<h4>¿Estás ocupado y no puedes ayudar a tus hijos con las tareas escolares?</h4>     <p>No te preocupes, Kiubit se especializa en ser guía en el proceso de la elaboración de tareas enfocadas en Matemáticas para niños de primaria, secundaria  y preparatoria.</p>        <p>Con ello, les ayudaremos a que muestren su inquietud sobre los temas que vieron en la escuela a nivel técnico y práctico con lo que les ayudaremos a fomentar su interés, sobre todo en alumnos que tienen problemas con sus hábitos de estudio.</p>        <p>En el taller nos comprometemos a que el alumno trabaje en un lugar cómodo y seguro, con un profesional que le brinde todas las herramientas y técnicas necesarias para realizar sus actividades escolares de manera personalizada.</p> '
    },
  ]

  servicio={} as Servicio

  constructor(public navbarService:NavbarService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    let servicioUrl=this.route.snapshot.params['servicio']
    console.log(servicioUrl);
    this.servicio=this.servicios.find(servicio=>{
      return servicio.id==servicioUrl
    })!
    console.log(this.servicio);
    
  }

}
