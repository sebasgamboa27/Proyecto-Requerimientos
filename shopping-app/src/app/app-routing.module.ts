import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./seleccionar-sucursal/seleccionar-sucursal.module').then(m => m.SeleccionarSucursalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'lista-empleados',
    loadChildren: () => import('./lista-empleados/lista-empleados.module').then( m => m.ListaEmpleadosPageModule)
  },
  {
    path: 'busqueda/:busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'detalle-articulo/:id',
    loadChildren: () => import('./detalle-articulo/detalle-articulo.module').then( m => m.DetalleArticuloPageModule)
  },
  {
    path: 'categoria/:cate',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'agregar-empleado',
    loadChildren: () => import('./agregar-empleado/agregar-empleado.module').then( m => m.AgregarEmpleadoPageModule)
  },
  {
    path: 'ordenes',
    loadChildren: () => import('./ordenes/ordenes.module').then( m => m.OrdenesPageModule)
  },
  {
    path: 'seleccionar-sucursal',
    loadChildren: () => import('./seleccionar-sucursal/seleccionar-sucursal.module').then( m => m.SeleccionarSucursalPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
