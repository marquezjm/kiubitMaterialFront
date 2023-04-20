import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-private-sidebar',
  templateUrl: './private-sidebar.component.html',
  styleUrls: ['./private-sidebar.component.scss']
})
export class PrivateSidebarComponent implements OnInit {

  abierto:boolean=false

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  logout(){
    /*this.authService.logout().subscribe({next:dato=>{
      if(dato.success){*/
        this.tokenService.logOut()
      /*}else{
        this.alert.openModal(dato.message)
      }
    },error:err=>{
      this.alert.openModal('Sistema no disponible')
    }})*/
    

  }

}
