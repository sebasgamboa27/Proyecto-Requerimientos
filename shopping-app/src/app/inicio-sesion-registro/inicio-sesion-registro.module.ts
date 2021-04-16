import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionRegistroPageRoutingModule } from './inicio-sesion-registro-routing.module';

import { InicioSesionRegistroPage } from './inicio-sesion-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionRegistroPageRoutingModule
  ],
  declarations: [InicioSesionRegistroPage]
})
export class InicioSesionRegistroPageModule {}
