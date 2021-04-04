import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCursoComponent } from './modificar-curso.component';

const routes: Routes = [{ path: '', component: ModificarCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarCursoRoutingModule { }
