import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  bandera:boolean=false

  constructor() { }

  toggle(){
    this.bandera=!this.bandera
  }
}
