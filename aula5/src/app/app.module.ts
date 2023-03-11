import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvBindingComponent } from './views/ev-binding/ev-binding.component';
import { Ex4Component } from './views/ex4/ex4.component';


@NgModule({
  declarations: [
    AppComponent,
    EvBindingComponent,
    Ex4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
