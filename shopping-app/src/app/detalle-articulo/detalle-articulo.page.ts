import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.page.html',
  styleUrls: ['./detalle-articulo.page.scss'],
})
export class DetalleArticuloPage implements OnInit {
  detallesArticulo:any={"imagen":"https://as.com/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg",
  "nombre":"Leche",
  "cantidad":"100",
"Descripcion":"dasfdfd",
"Precio":"2343"};
id:any
  constructor(private base:DatabaseService,private activatedRoute:ActivatedRoute,private cart: CartService) { }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id=paramMap.get('id')
      })

    console.log(await this.base.getArticulo(this.id))
    
  }

  agregarAlCarrito(){
    this.detallesArticulo.cantidad=this.detallesArticulo.cantidad-1;
    this.cart.addItem(this.detallesArticulo);
  }

}
