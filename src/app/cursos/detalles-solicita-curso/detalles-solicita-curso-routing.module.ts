import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSolicitaCursoComponent } from './detalles-solicita-curso.component';

const routes: Routes = [{ path: '', component: DetallesSolicitaCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesSolicitaCursoRoutingModule { }
