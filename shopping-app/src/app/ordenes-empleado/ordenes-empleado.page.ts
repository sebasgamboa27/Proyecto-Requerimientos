import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes-empleado',
  templateUrl: './ordenes-empleado.page.html',
  styleUrls: ['./ordenes-empleado.page.scss'],
})
export class OrdenesEmpleadoPage implements OnInit {
  ordenes = [{"id":12,
              "fecha":"13/12/2000",
              "precioTotal":5000,
              "nombre":"Allison",
              "apellido":"Solano"},
              {"id":45,
              "fecha":"13/3/2000",
              "precioTotal":2000,
              "nombre":"Carlos",
              "apellido":"Badilla"}]
  constructor() { }

  ngOnInit() {
    //LLAMAR AL SERVICIO QUE DA TODAS LAS ORDENES
  }

}
