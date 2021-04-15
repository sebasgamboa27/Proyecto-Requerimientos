import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.page.html',
  styleUrls: ['./lista-empleados.page.scss'],
})
export class ListaEmpleadosPage implements OnInit {

  empleados = [];

  constructor() { }

  ngOnInit() {
    //LLAMAR AL SERVICIO
    this.empleados =[{"nombre" : 'Carlitos',
                      "apellido" : 'Badilla',
                      "NombreDeUsuario": 'cato',
                    "cedula":'1176534' },
                    {"nombre" : 'Allison',
                    "apellido" : 'Solano',
                    "NombreDeUsuario": 'Allis',
                  "cedula":'1179852' }]
  }

}
