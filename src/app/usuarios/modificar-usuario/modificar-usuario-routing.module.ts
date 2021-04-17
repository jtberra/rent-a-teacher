import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarUsuarioComponent } from './modificar-usuario.component';

const routes: Routes = [{ path: '', component: ModificarUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarUsuarioRoutingModule { }
