import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Ele precisou ser importado
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    // Usamos o forms module para formulario
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
