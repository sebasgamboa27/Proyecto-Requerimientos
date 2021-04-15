import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
})
export class AgregarEmpleadoPage implements OnInit {
  
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
  }
  onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(this.empleado)
  }
}
