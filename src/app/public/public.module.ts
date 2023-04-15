import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { HomeComponent } from "./home/home.component";
import { PublicRoutingModule } from "./public-routing.module";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ServicioComponent } from "./servicio/servicio.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { RegistrarComponent } from './registrar/registrar.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@NgModule({

    declarations: [
        HomeComponentComponent,
        CursosComponent,
        HomeComponent,
        QuienesSomosComponent,
        ServiciosComponent,
        ServicioComponent,
        LoginComponent,
        RegistrarComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PublicRoutingModule,
        FormsModule,
        MdbFormsModule
    ],
    providers: [],
    exports:[
    ],
    bootstrap: [HomeComponentComponent]
  })
  export class PublicModule { }