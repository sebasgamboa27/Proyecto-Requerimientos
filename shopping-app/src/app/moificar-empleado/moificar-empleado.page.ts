import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moificar-empleado',
  templateUrl: './moificar-empleado.page.html',
  styleUrls: ['./moificar-empleado.page.scss'],
})
export class MoificarEmpleadoPage implements OnInit {
  empleado={
    nombre:'',
    apellido:'',
    correo:'',
    usuario:'',
    contra:'',
    dir:''
  };
  constructor() { }

  ngOnInit() {
    //LLAMAR A consultar empleado con un id
  }
  onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(this.empleado)
  }

}
