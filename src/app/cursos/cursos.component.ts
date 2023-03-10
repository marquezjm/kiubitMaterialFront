import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

interface Curso{
  imagen:string,
  titulo:string,
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos:Curso[]=[
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000651-b85b0b85b3/1ro%20sec.PNG?ph=ff636f43e6',titulo:'1ro de Secundaria'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000652-2631226315/2do%20sec.PNG?ph=ff636f43e6',titulo:'2do de Secundaria'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000653-03acc03acf/3ro%20sec.PNG?ph=ff636f43e6',titulo:'3ro de Secundaria'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000654-5b46c5b46f/1ro%20prepa.PNG?ph=ff636f43e6',titulo:'1ro de Preparatoria'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000655-ab0d2ab0d4/2do%20prepa.PNG?ph=ff636f43e6',titulo:'2do de Preparatoria'},
    {imagen:'https://ff636f43e6.cbaul-cdnwnd.com/e0eef4fe6f99295f30f83e561ff2c5a0/200000656-ad51aad51d/2ro%20preparatoria.PNG?ph=ff636f43e6',titulo:'3ro de Preparatoria'},
  ]

  constructor(public navbarService:NavbarService) { }

  ngOnInit(): void {
  }

}
