import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion-registro',
  templateUrl: './inicio-sesion-registro.page.html',
  styleUrls: ['./inicio-sesion-registro.page.scss'],
})
export class InicioSesionRegistroPage implements OnInit {

  constructor() { }

  @Input() nombreUsuario: string;
  @Input() contrasena: string;


  @Input() email: string;
  @Input() nombre: string;
  @Input() dirFisica: string;
  @Input() nombreUsuarioRegistro: string;
  @Input() contrasenaRegistro: string;
  @Input() apellido: string;


  ngOnInit() {
    document.getElementById('login-form').style.display='block';
  }

  register(){

    const x = document.getElementById('login');
    const y = document.getElementById('register');
    const z = document.getElementById('btn');

    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';

	}
  login(){

    const x = document.getElementById('login');
    const y = document.getElementById('register');
    const z = document.getElementById('btn');

    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
  }


  registrarUsuario(){
    console.log('Logica para registrar',this.nombreUsuarioRegistro,this.contrasenaRegistro,this.nombre,this.apellido,this.email,this.dirFisica);
  }

  inicioSesion(){
    console.log('Logica para iniciar sesion',this.nombreUsuario,this.contrasena);
  }

}
