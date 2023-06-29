import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigateByUrl(`/private`)
  }

}
