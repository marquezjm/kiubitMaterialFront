import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestimoniosComponent } from './testimonios.component';

@NgModule({
  declarations: [
    TestimoniosComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports:[TestimoniosComponent],
  bootstrap: [TestimoniosComponent]
})
export class TestimoniosModule { }
