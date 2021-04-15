import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleArticuloEmpleadoPage } from './detalle-articulo-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleArticuloEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleArticuloEmpleadoPageRoutingModule {}
