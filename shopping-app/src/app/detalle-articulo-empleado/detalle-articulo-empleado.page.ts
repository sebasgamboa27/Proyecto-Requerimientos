import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//usar este import para conseguir los parametros  de la url

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-detalle-articulo-empleado',
  templateUrl: './detalle-articulo-empleado.page.html',
  styleUrls: ['./detalle-articulo-empleado.page.scss'],
})
export class DetalleArticuloEmpleadoPage implements OnInit {
  
    nombre:'';
    imagen:'';
    cantidad:0;
    precio:0;
    descripcion:'';
    

  id:any;
  constructor(private activatedRoute:ActivatedRoute, private base:DatabaseService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{//se consigue el id por medio de los parametros de la url
      this.id=paramMap.get('articulo')
      })
      console.log(this.id)
  }

  onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(this.nombre,this.imagen,this.cantidad,this.precio,this.descripcion)
    //await this.base.sp_updateArticulo(this.nombre,this.descripcion,this.precio,this.cantidad,2)
    
  }

}
