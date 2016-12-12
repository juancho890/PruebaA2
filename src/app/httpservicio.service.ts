import { Injectable } from '@angular/core';
import { Http, Response,Headers} from "@angular/http" 
import 'rxjs/Rx';

@Injectable()
export class Httpservicio {

  constructor(private http:Http) { }
  getDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map((respuesta:Response)=>respuesta.json());
  }
  EnviarDatos(user:any){
    const cuerpo=JSON.stringify(user)
    const Cabecera=new Headers();
    Cabecera.append('Content-Type','application/json');
    return this.http.post('https://jsonplaceholder.typicode.com/posts',
    cuerpo,{headers:Cabecera}).map((datos:Response)=>datos.json());
  }

}
