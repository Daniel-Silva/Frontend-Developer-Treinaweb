import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { NewComponentComponent } from './new-component/new-component.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
