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
  ngOnInit() {
    this.base.sp_selectSucursal().subscribe((res)=>{
      this.suc=res;
    });
  }

}
