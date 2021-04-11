import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCursoComponent } from './modificar-curso.component';

const routes: Routes = [
  { path: '', component: ModificarCursoComponent },
  { 
    path: 'home', 
    loadChildren: () => import('../../modulos/home/home.module').then(m => m.HomeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarCursoRoutingModule { }
