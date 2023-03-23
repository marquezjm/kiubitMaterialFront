import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ServicioComponent } from "./servicio/servicio.component";
import { ServiciosComponent } from "./servicios/servicios.component";

const routes: Routes = [
    {path:'', component:HomeComponentComponent,children:[
        {path:'', component:HomeComponent},
        {path:'sobre-nosotros', component:QuienesSomosComponent},
        {path:'servicios', component:ServiciosComponent},
        {path:'servicios/:servicio', component:ServicioComponent},
        {path:'cursos', component:CursosComponent},
    ]},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PublicRoutingModule { }