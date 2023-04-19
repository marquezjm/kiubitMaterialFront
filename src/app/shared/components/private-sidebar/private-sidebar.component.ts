import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-sidebar',
  templateUrl: './private-sidebar.component.html',
  styleUrls: ['./private-sidebar.component.scss']
})
export class PrivateSidebarComponent implements OnInit {

  abierto:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
