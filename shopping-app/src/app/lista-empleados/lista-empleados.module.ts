import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEmpleadosPageRoutingModule } from './lista-empleados-routing.module';

import { ListaEmpleadosPage } from './lista-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEmpleadosPageRoutingModule
  ],
  declarations: [ListaEmpleadosPage]
})
export class ListaEmpleadosPageModule {}
