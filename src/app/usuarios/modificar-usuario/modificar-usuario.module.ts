import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarUsuarioRoutingModule } from './modificar-usuario-routing.module';
import { ModificarUsuarioComponent } from './modificar-usuario.component';


@NgModule({
  declarations: [ModificarUsuarioComponent],
  imports: [
    CommonModule,
    ModificarUsuarioRoutingModule
  ]
})
export class ModificarUsuarioModule { }
