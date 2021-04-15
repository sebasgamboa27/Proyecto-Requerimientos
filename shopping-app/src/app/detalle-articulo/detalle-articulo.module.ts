import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleArticuloPageRoutingModule } from './detalle-articulo-routing.module';

import { DetalleArticuloPage } from './detalle-articulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleArticuloPageRoutingModule
  ],
  declarations: [DetalleArticuloPage]
})
export class DetalleArticuloPageModule {}
