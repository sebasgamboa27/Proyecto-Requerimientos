import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionar-sucursal',
  templateUrl: './seleccionar-sucursal.page.html',
  styleUrls: ['./seleccionar-sucursal.page.scss'],
})
export class SeleccionarSucursalPage implements OnInit {
  sucursales:any=['San jose','Alajuela','Heredia','Guanacaste','Limon','Cartago','Puntarenas']
  constructor() {}

  ngOnInit() {
  }

}
