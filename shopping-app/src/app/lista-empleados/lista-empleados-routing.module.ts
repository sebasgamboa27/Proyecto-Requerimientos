import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEmpleadosPage } from './lista-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEmpleadosPageRoutingModule {}
