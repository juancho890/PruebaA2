import { Component } from '@angular/core';
// Router?
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private rutas:Router){}
  Navegacion(aux :string){ 
    this.rutas.navigate([aux])
  }
}
