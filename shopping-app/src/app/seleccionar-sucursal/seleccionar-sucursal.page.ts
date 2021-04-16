import { Component, OnInit } from '@angular/core';

import{DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-seleccionar-sucursal',
  templateUrl: './seleccionar-sucursal.page.html',
  styleUrls: ['./seleccionar-sucursal.page.scss'],
})
export class SeleccionarSucursalPage implements OnInit {
  sucursales:any=['San jose','Alajuela','Heredia','Guanacaste','Limon','Cartago','Puntarenas']
  suc:any
  constructor(private base:DatabaseService) {}
  async ngOnInit() {
    this.suc=await this.base.sp_selectSucursal()
    console.log(this.suc)
  }

}
