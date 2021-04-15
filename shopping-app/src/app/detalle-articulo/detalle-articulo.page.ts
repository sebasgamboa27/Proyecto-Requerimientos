import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
//private base:DatabaseService
@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.page.html',
  styleUrls: ['./detalle-articulo.page.scss'],
})
export class DetalleArticuloPage implements OnInit {
  detallesArticulo:any={"imagen":"https://as.com/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg",
  "nombre":"Leche",
  "cantidad":"100"};
  constructor() { }

  ngOnInit() {
  }

  agregarAlCarrito(){
    this.detallesArticulo.cantidad=this.detallesArticulo.cantidad-1
  }

}
