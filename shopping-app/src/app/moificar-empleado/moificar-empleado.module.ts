import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoificarEmpleadoPageRoutingModule } from './moificar-empleado-routing.module';

import { MoificarEmpleadoPage } from './moificar-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoificarEmpleadoPageRoutingModule
  ],
  declarations: [MoificarEmpleadoPage]
})
export class MoificarEmpleadoPageModule {}
