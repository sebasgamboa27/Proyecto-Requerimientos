import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-articulo-empleado',
  templateUrl: './detalle-articulo-empleado.page.html',
  styleUrls: ['./detalle-articulo-empleado.page.scss'],
})
export class DetalleArticuloEmpleadoPage implements OnInit {
  detalle={
    "nombre":"ak-47",
    "imagen":"https://as.com/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg",
    "cantidad":"34",
    "precio":"2333",
    "descripcion":"fdfndsfnds",

  }
  constructor() { }

  ngOnInit() {
  }

  actualizar(){
    console.log(this.detalle.nombre,this.detalle.imagen)
  }

}
