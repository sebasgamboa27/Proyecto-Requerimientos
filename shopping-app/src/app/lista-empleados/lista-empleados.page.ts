import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.page.html',
  styleUrls: ['./lista-empleados.page.scss'],
})
export class ListaEmpleadosPage implements OnInit {

  //empleados :any;
  empleados =[{
    "id":0,
    "nombre":'Allison',
    "apellido":'Solano'
  }];
  empleado_select:number;
  constructor(private base:DatabaseService) { }

  async ngOnInit() {
    
    this.empleados = await this.base.getAllUsuarios();
    
    console.log(this.empleados);
  }
  eliminarEmpleado(id){
    console.log(id)
  }
  

}
