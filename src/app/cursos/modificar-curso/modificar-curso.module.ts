import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarCursoRoutingModule } from './modificar-curso-routing.module';
import { ModificarCursoComponent } from './modificar-curso.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModificarCursoComponent,
  ],
  imports: [
    CommonModule,
    ModificarCursoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ModificarCursoModule { }
