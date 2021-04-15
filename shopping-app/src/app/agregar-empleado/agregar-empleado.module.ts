import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEmpleadoPageRoutingModule } from './agregar-empleado-routing.module';

import { AgregarEmpleadoPage } from './agregar-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEmpleadoPageRoutingModule
  ],
  declarations: [AgregarEmpleadoPage]
})
export class AgregarEmpleadoPageModule {}
