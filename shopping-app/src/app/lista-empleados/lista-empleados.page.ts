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
  empleado_select:string;
  constructor(private base:DatabaseService) { }

   ngOnInit() {
    
    
  }
  async ionViewWillEnter(){
    this.empleados = await this.base.getAllUsuarios();
    
    console.log(this.empleados);
  }
  async  eliminarEmpleado(){
    for (const empleado of this.empleados) {  
      if(empleado.nombre == this.empleado_select){
        await this.base.sp_deleteUsuario(empleado.id);
        break;
      }
    }
    
  }
  

}
