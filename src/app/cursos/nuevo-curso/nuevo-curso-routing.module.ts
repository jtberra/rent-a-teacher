import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoCursoComponent } from './nuevo-curso.component';

const routes: Routes = [{ path: '', component: NuevoCursoComponent },{ 
  path: 'home', 
  loadChildren: () => import('../../modulos/home/home.module').then(m => m.HomeModule) 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoCursoRoutingModule { }
