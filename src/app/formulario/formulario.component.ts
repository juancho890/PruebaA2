import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Httpservicio } from './../httpservicio.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  Formulario: FormGroup;
  
  numUnico:number;
  Indice:number;
  StaticPhone:string;
  PhoneBind:string;

  habForm:boolean=true;
  habNuevoUsuario:boolean=false;
  DatosRecibidos:Object;

  constructor(@Inject(FormBuilder) fb: FormBuilder,private httpservicio:Httpservicio) {
    this.PhoneBind="";
    this.StaticPhone="";
    this.Formulario = fb.group({
      nombre: ['',Validators.required],
      usrname:['',Validators.required],
      email: ['',[
        Validators.pattern(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]
      ],
      tel:[' ',[Validators.minLength(6)]]
    });
    this.Formulario.valueChanges.subscribe(
      (data:any)=>this.habForm=true
    );
  }

  Enviar(){
    if(this.Formulario.status=='INVALID'){
      this.habForm=false;
    }else{
      this.httpservicio.EnviarDatos(this.Formulario.value)
      .subscribe(
        datos =>this.CargaExitosa(datos),
        err => console.log(err)
      );
    }
  }  

  CargaExitosa(aux :string){ 
    console.log(aux)
    this.DatosRecibidos=aux;  
    this.habNuevoUsuario=true; 
 
  }
  Refrescar(){
    this.habNuevoUsuario=false; 
    this.Formulario.reset();
  }
  onKey(){ 
      this.Indice=this.PhoneBind.length;
      this.numUnico=parseInt(this.PhoneBind.substr(this.Indice-1,1));
      if(this.numUnico>=0 && this.numUnico<10){
        this.StaticPhone=this.PhoneBind;     
      } 
      else{
          this.PhoneBind=this.StaticPhone;                 
      }
      if(this.Indice==0){
        this.StaticPhone="";
        this.PhoneBind="";
      } 
  }
  offKey(){
      this.Indice=this.PhoneBind.length;
      this.numUnico=parseInt(this.PhoneBind.substr(this.Indice-1,1));
      if(!(this.numUnico>=0 && this.numUnico<10)){
        this.PhoneBind=this.PhoneBind.slice(0,this.Indice-1);   
      }
  }
}