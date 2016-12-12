import { Component, OnInit} from '@angular/core';
import { Httpservicio } from './../httpservicio.service';
import { Response } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  private users: Array<Object>;
  private usuario:Object;
  private usrselect:boolean;

  constructor(private servicio:Httpservicio) { }
  ngOnInit() {
    this.usrselect=false;
    this.servicio.getDatos().subscribe(
      (datos: any) => this.users=datos,
      err => console.log(err)
    );    
  }

  SelectorDetail(Aux:Object){
    this.usuario=Aux;
    this.usrselect=true; 
  }


}
