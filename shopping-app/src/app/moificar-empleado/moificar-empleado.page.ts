import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//usar este import para conseguir los parametros  de la url

import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-moificar-empleado',
  templateUrl: './moificar-empleado.page.html',
  styleUrls: ['./moificar-empleado.page.scss'],
})
export class MoificarEmpleadoPage implements OnInit {
  empleado :any
  nombre:'';
    apellido:'';
    ced:0;
    correo:'';
    usuario:'';
    contra:'';
    dir:'';
  id:any;
  constructor(private activatedRoute:ActivatedRoute, private base:DatabaseService) { }

  async ngOnInit() {
    //LLAMAR A consultar empleado con un id
    this.activatedRoute.paramMap.subscribe(paramMap =>{//se consigue el id por medio de los parametros de la url
      this.id=paramMap.get('id')
      })
      console.log(this.id);
      this.empleado=await this.base.sp_selectUsuario(this.id);
      console.log(this.empleado);
      this.nombre=this.empleado[0].nombre;
      this.apellido=this.empleado[0].apellido;
      this.ced=this.empleado[0].ced;
      this.correo=this.empleado[0].correo;
      this.usuario=this.empleado[0].nombreusuario;
      this.contra=this.empleado[0].contrasena;
      this.dir=this.empleado[0].direccionfisica;
  }
  async onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    await this.base.sp_updateUsuario(this.id,this.nombre,this.apellido,this.contra,this.correo,this.dir,this.usuario,this.ced,2)
    
  }

}
