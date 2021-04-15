import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesEmpleadoPage } from './ordenes-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesEmpleadoPageRoutingModule {}
