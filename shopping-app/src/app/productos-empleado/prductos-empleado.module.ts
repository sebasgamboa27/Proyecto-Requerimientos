import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrductosEmpleadoPageRoutingModule } from './prductos-empleado-routing.module';

import { PrductosEmpleadoPage } from './prductos-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrductosEmpleadoPageRoutingModule
  ],
  declarations: [PrductosEmpleadoPage]
})
export class PrductosEmpleadoPageModule {}
