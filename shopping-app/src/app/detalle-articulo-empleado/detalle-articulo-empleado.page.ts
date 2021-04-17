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
    cantidad:'';
    precio:'';
    descripcion:'';

  id:any;
  constructor(private activatedRoute:ActivatedRoute, private base:DatabaseService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{//se consigue el id por medio de los parametros de la url
      this.id=paramMap.get('articulo')
      })
      console.log(this.id)
  }

  async onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(String(this.nombre),this.imagen,this.cantidad,this.precio,this.descripcion)
    //(this.nombre,this.imagen,this.cantidad,this.precio,this.descripcion)
    
  }

}
