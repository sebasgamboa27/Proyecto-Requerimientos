import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//usar este import para conseguir los parametros  de la url
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
  id:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //LLAMAR A consultar empleado con un id
    this.activatedRoute.paramMap.subscribe(paramMap =>{//se consigue el id por medio de los parametros de la url
      this.id=paramMap.get('id')
      })
      console.log(this.id);
  }
  onSubmitTemplate(){
    console.log('Tomando datos del usuario')
    console.log(this.empleado)
  }

}
