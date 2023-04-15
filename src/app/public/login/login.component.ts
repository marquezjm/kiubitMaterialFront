import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';
  rememberMe: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }

}
