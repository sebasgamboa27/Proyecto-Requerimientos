import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  detalle={
    "nombre":"",
    "imagen":"",
    "cantidad":"",
    "precio":"",
    "descripcion":"",

  }
  constructor() { }

  ngOnInit() {

  }

  insertar(){
    console.log(this.detalle)
    this.detalle={"nombre":"",
    "imagen":"",
    "cantidad":"",
    "precio":"",
    "descripcion":"",}
  }

}
