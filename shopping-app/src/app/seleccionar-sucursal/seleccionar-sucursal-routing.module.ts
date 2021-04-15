import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarSucursalPage } from './seleccionar-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarSucursalPageRoutingModule {}
