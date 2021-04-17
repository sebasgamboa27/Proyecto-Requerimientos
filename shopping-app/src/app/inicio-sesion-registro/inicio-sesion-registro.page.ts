import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-inicio-sesion-registro',
  templateUrl: './inicio-sesion-registro.page.html',
  styleUrls: ['./inicio-sesion-registro.page.scss'],
})
export class InicioSesionRegistroPage implements OnInit {

  constructor(private base: DatabaseService,private router: Router) { }

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


  async registrarUsuario(){
    console.log('Logica para registrar',this.nombreUsuarioRegistro,this.contrasenaRegistro,this.nombre,this.apellido,this.email,this.dirFisica);
    //const result = await this.base.sp_InsertUsuario(this.nombre,this.apellido,this.contrasenaRegistro,this.email,this.dirFisica,this.nombreUsuarioRegistro);

    this.router.navigateByUrl('/sucursal');
    
  }

  async inicioSesion(){
    console.log('Logica para iniciar sesion',this.nombreUsuario,this.contrasena);
    const usuario = await this.base.getLoginUser(this.nombreUsuario,this.contrasena);

    console.log(usuario);


    if(usuario != null){
      console.log('Usuario valido');
      this.router.navigateByUrl('/sucursal');
    }
  }

}
