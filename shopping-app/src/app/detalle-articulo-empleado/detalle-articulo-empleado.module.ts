import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleArticuloEmpleadoPageRoutingModule } from './detalle-articulo-empleado-routing.module';

import { DetalleArticuloEmpleadoPage } from './detalle-articulo-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleArticuloEmpleadoPageRoutingModule
  ],
  declarations: [DetalleArticuloEmpleadoPage]
})
export class DetalleArticuloEmpleadoPageModule {}
