import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  detalle={
    nombre:"",
    imagen:"",
    cantidad:0,
    precio:0,
    descripcion:"",
    categoria:0

  }
  constructor(private base:DatabaseService) { }

  ngOnInit() {

  }
 
  async insertar(){
    await this.base.sp_InsertArticulo(this.detalle.nombre, this.detalle.descripcion, this.detalle.precio, this.detalle.cantidad, this.detalle.categoria)
    
    this.detalle={
      nombre:"",
      imagen:"",
      cantidad:0,
      precio:0,
      descripcion:"",
      categoria:0
    }

}
}
