import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsEmpleadosPage } from './tabs-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: TabsEmpleadosPage,
    children:[
      {
        path: 'listaEmpleado',
        loadChildren: () => import('../lista-empleados/lista-empleados.module').then(m => m.ListaEmpleadosPageModule)
      },
      {
        path: 'ordenesEmpleado',
        loadChildren: () => import('../ordenes-empleado/ordenes-empleado.module').then(m => m.OrdenesEmpleadoPageModule)
      },
      {
        path: 'productosEmpleado',
        loadChildren: () => import('../productos-empleado/prductos-empleado.module').then(m => m.PrductosEmpleadoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-empleados/listaEmpleado',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-empleados/listaEmpleado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsEmpleadosPageRoutingModule {}
