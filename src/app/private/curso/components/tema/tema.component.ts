import { Component, Input, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/public.interface';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {

  @Input('tema') tema = {} as Tema

  constructor() { }

  ngOnInit(): void {
  }

}
