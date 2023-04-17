import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/login.interface';
import { FooterService } from 'src/app/services/footer.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formulario=this.fb.group({
    email:['',{validators:[Validators.required,Validators.email],updateOn:'submit'}],
    password:['',{validators:Validators.required,updateOn:'submit'}],
    rememberMe:[false],
  })

  constructor(private fb:FormBuilder,private service:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.formulario.markAllAsTouched()
    if(this.formulario.valid){
      let loginUser:LoginRequest={
        email:this.formulario.get('email')?.value?.valueOf().toString()!,
        password:this.formulario.get('password')?.value?.valueOf().toString()!
      }

      this.service.login(loginUser).subscribe({next:dato=>{
        console.log(dato);

      },error:err=>{
        console.log(err);

      }})
    }

  }

  get email():AbstractControl{
    return this.formulario.get('email')!
  }

  get password():AbstractControl{
    return this.formulario.get('password')!
  }

  get rememberMe():AbstractControl{
    return this.formulario.get('rememberMe')!
  }

}
