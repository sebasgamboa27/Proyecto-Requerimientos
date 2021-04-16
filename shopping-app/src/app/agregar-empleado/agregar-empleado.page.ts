import { Component, OnInit, NgModule } from '@angular/core';

import{DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
})
export class AgregarEmpleadoPage implements OnInit {
  
  empleado={
    nombre:'',
    apellido:'',
    ced:0,
    correo:'',
    usuario:'',
    contra:'',
    dir:''
  };
  constructor(private base:DatabaseService) { }

  ngOnInit() {
  }
  async onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(this.empleado)
    await this.base.sp_InsertUsuario(
      this.empleado.nombre,
      this.empleado.apellido,
      this.empleado.contra,
      this.empleado.correo,
      this.empleado.dir,
      this.empleado.usuario,
      this.empleado.ced,
      2)
    
  }
  
}
