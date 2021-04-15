import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
//private base:DatabaseService
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  busqueda:any;
  constructor() { 
    this.busqueda=[
      {"id":"1",
      "Nombre":"jabon"},
      {"id":"2",
      "Nombre":"gorra"},]
  }

  ngOnInit() {
  }

}
