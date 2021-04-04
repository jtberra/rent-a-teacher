import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarCursoRoutingModule } from './modificar-curso-routing.module';
import { ModificarCursoComponent } from './modificar-curso.component';


@NgModule({
  declarations: [ModificarCursoComponent],
  imports: [
    CommonModule,
    ModificarCursoRoutingModule
  ]
})
export class ModificarCursoModule { }
