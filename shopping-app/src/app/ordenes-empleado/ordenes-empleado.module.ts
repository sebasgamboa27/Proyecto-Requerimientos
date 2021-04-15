import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesEmpleadoPageRoutingModule } from './ordenes-empleado-routing.module';

import { OrdenesEmpleadoPage } from './ordenes-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenesEmpleadoPageRoutingModule
  ],
  declarations: [OrdenesEmpleadoPage]
})
export class OrdenesEmpleadoPageModule {}
