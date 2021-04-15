import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrductosEmpleadoPage } from './prductos-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: PrductosEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrductosEmpleadoPageRoutingModule {}
