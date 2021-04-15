import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsEmpleadosPageRoutingModule } from './tabs-empleados-routing.module';

import { TabsEmpleadosPage } from './tabs-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsEmpleadosPageRoutingModule
  ],
  declarations: [TabsEmpleadosPage]
})
export class TabsEmpleadosPageModule {}
