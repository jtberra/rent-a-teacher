import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoUsuarioRoutingModule } from './nuevo-usuario-routing.module';
import { NuevoUsuarioComponent } from './nuevo-usuario.component';
import { UserFormModule } from 'src/app/componentes/user-form/user-form.module';


@NgModule({
  declarations: [NuevoUsuarioComponent],
  imports: [
    CommonModule,
    NuevoUsuarioRoutingModule,
    UserFormModule,
  ]
})
export class NuevoUsuarioModule { }
