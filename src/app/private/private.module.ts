import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { HomeComponent } from "./home/home.component";
import { PrivateRoutingModule } from "./private-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CursosComponent } from './cursos/cursos.component';
import { AppComponent } from './app/app.component';

@NgModule({

    declarations: [
        HomeComponent,
        DashboardComponent,
        CursosComponent,
        AppComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        MdbFormsModule,
        ReactiveFormsModule,
        MdbValidationModule,
        PrivateRoutingModule,
    ],
    providers: [],
    exports:[
    ],
    bootstrap: [HomeComponent]
  })
  export class PrivateModule { }
