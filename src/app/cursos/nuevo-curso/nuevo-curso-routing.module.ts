import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoCursoComponent } from './nuevo-curso.component';

const routes: Routes = [{ path: '', component: NuevoCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoCursoRoutingModule { }
