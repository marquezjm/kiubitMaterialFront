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
import { AppComponent } from './app/app.component';
import { AuthInterceptor } from "../interceptors/auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/components/dashbord/dashboard.component";
import { CursosComponent } from "./dashboard/components/curso/cursos.component";

@NgModule({

    declarations: [
        HomeComponent,
        DashboardComponent,
        AppComponent,
        CursosComponent
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
