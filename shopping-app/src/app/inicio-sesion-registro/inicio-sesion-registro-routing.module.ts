import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionRegistroPage } from './inicio-sesion-registro.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionRegistroPageRoutingModule {}
