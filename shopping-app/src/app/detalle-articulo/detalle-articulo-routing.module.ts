import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleArticuloPage } from './detalle-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleArticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleArticuloPageRoutingModule {}
