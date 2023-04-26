import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { PrivateSidebarComponent } from './components/private-sidebar/private-sidebar.component';

@NgModule({
  declarations: [
    TestimoniosComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    PrivateSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  exports:[
    TestimoniosComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    PrivateSidebarComponent,
    MaterialModule
  ],
  bootstrap: []
})
export class SharedModule { }
