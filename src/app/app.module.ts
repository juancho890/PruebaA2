import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './usuarios/users.component';
import { routing } from './app.routing'

import { Httpservicio } from './httpservicio.service';
import { FormularioComponent } from './formulario/formulario.component'


import { DetailComponent } from './usuarios/detail/detail.component';
import { SelectorDirective } from './usuarios/selector.directive';
import { NombreSoloPipe } from './nombresolo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    FormularioComponent,
    DetailComponent,
    SelectorDirective,
    NombreSoloPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [Httpservicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
