import { Component, OnInit } from '@angular/core';

import{DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-seleccionar-sucursal',
  templateUrl: './seleccionar-sucursal.page.html',
  styleUrls: ['./seleccionar-sucursal.page.scss'],
})
export class SeleccionarSucursalPage implements OnInit {
  sucursales=[];
  suc:any;
  constructor(private base:DatabaseService) {}
  async ngOnInit() {
    this.suc=await this.base.sp_selectSucursal()
    for (var i=0;i<this.suc.length;i++){
      this.sucursales.push(this.suc[i]);
    }
  }

  async sucursal(id:number){
    await this.base.enviarSucursal(id);
  }

}
