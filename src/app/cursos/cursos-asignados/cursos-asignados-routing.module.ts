import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAsignadosComponent } from './cursos-asignados.component';

const routes: Routes = [{ path: '', component: CursosAsignadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosAsignadosRoutingModule { }
