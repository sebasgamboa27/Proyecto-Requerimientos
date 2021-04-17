import { Component, OnInit, NgModule } from '@angular/core';

import{DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
})
export class AgregarEmpleadoPage implements OnInit {
  
  
    nombre:'';
    apellido:'';
    ced:0;
    correo:'';
    usuario:'';
    contra:'';
    dir:'';
  
  constructor(private base:DatabaseService) { }

  ngOnInit() {
  }
  async onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(String(this.nombre),this.apellido,this.contra,this.correo,this.dir,this.usuario,this.ced)
    await this.base.sp_InsertUsuario(String(this.nombre),this.apellido,this.contra,this.correo,this.dir,this.usuario,this.ced,2)
    
  }
  
}
