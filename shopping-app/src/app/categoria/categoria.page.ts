import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private base:DatabaseService,private activatedRoute:ActivatedRoute) { }
  categoria:any
  productos:any
  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.categoria=paramMap.get('cate')
      })
      this.productos= await this.base.getArticuloXcategoria(this.categoria)
      console.log(this.productos)
  }

}
