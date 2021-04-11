import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosImpartidosComponent } from './cursos-impartidos.component';

const routes: Routes = [{ path: '', component: CursosImpartidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosImpartidosRoutingModule { }
