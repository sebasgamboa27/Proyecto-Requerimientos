import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.page.html',
  styleUrls: ['./detalle-articulo.page.scss'],
})
export class DetalleArticuloPage implements OnInit {
detallesArticulo:any
id:any
det=false
  constructor(private base:DatabaseService,private activatedRoute:ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id=paramMap.get('id')
      })

    this.detallesArticulo=await this.base.getArticulo(this.id)
    if(this.detallesArticulo!=null){
      this.det=true
    }
    console.log(this.detallesArticulo)
    
  }

  agregarAlCarrito(){
    this.detallesArticulo.cantidad=this.detallesArticulo.cantidad-1
  }

}
