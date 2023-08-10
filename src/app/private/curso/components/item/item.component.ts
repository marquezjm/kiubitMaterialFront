import { Component, Input, OnInit } from '@angular/core';
import { Modulo } from 'src/app/models/public.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('modulo') modulo = {} as Modulo
  @Input('index') index = 0

  constructor() { }

  ngOnInit(): void {
  }

}
