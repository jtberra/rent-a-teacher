import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosImpartidosComponent } from './cursos-impartidos.component';

const routes: Routes = [{ path: '', component: CursosImpartidosComponent },
{ path: 'mi-perfil', loadChildren: () => import('../../usuarios/mi-perfil/mi-perfil.module').then(m => m.MiPerfilModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosImpartidosRoutingModule { }
