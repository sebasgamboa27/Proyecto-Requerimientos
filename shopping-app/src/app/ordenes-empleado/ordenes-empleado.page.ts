import { Component, OnInit } from '@angular/core';
import{DatabaseService} from '../services/database.service'

@Component({
  selector: 'app-ordenes-empleado',
  templateUrl: './ordenes-empleado.page.html',
  styleUrls: ['./ordenes-empleado.page.scss'],
})
export class OrdenesEmpleadoPage implements OnInit {
  ordenes2 = [{"id":12,
              "fecha":"13/12/2000",
              "precioTotal":5000,
              "nombre":"Allison",
              "apellido":"Solano"},
              {"id":45,
              "fecha":"13/3/2000",
              "precioTotal":2000,
              "nombre":"Carlos",
              "apellido":"Badilla"}]
  ordenes:any;
  constructor(private base:DatabaseService) { }
  
  
  async ngOnInit() {
    //LLAMAR AL SERVICIO QUE DA TODAS LAS ORDENES
    this.ordenes = await this.base.sp_selectPedido();
  }

}
