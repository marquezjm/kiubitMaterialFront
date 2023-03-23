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

@NgModule({

    declarations: [
        HomeComponentComponent,
        CursosComponent,
        HomeComponent,
        QuienesSomosComponent,
        ServiciosComponent,
        ServicioComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PublicRoutingModule
    ],
    providers: [],
    exports:[
    ],
    bootstrap: [HomeComponentComponent]
  })
  export class PublicModule { }