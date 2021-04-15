import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarSucursalPageRoutingModule } from './seleccionar-sucursal-routing.module';

import { SeleccionarSucursalPage } from './seleccionar-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarSucursalPageRoutingModule
  ],
  declarations: [SeleccionarSucursalPage]
})
export class SeleccionarSucursalPageModule {}
