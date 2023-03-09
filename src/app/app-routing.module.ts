import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre-nosotros', component:QuienesSomosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'servicios/:servicio', component:ServicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
