import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'mi-perfil', loadChildren: () => import('../../usuarios/mi-perfil/mi-perfil.module').then(m => m.MiPerfilModule) },
{ path: 'catalogo', loadChildren: () => import('../../modulos/catalogo/catalogo.module').then(m => m.CatalogoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
