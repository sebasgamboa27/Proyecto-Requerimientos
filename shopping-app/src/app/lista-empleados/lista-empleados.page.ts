import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.page.html',
  styleUrls: ['./lista-empleados.page.scss'],
})
export class ListaEmpleadosPage implements OnInit {

  empleados :any;

  constructor(private base:DatabaseService) { }

  async ngOnInit() {
    this.empleados=await this.base.sp_selectSucursal();
    console.log(this.empleados);
  }
  eliminarEmpleado(id){
    console.log(id)
  }
  

}
