import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCursoComponent } from './detalles-curso.component';

const routes: Routes = [{ path: '', component: DetallesCursoComponent },{ 
  path: 'home', 
  loadChildren: () => import('../../modulos/home/home.module').then(m => m.HomeModule) 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesCursoRoutingModule { }
