import { Component, Input, OnInit } from '@angular/core';
import { Modulo } from 'src/app/models/public.interface';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  @Input('index') index = 0
  @Input('modulo') modulo = {} as Modulo

  constructor() { }

  ngOnInit(): void {
  }

}
