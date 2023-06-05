import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    ComponentePadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
