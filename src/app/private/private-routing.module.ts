import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CursoComponent } from "./curso/curso.component";

const routes: Routes = [
  {path:'', component:HomeComponent,children:[
    {path:'', component:DashboardComponent},
    {path:'cursos', component:CursosComponent},
    {path:'app', component:AppComponent},
    {path:'curso/:id_curso', component:CursoComponent},
  ]}
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PrivateRoutingModule { }