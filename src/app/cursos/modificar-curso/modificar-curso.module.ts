import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarCursoRoutingModule } from './modificar-curso-routing.module';
import { ModificarCursoComponent } from './modificar-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoFormModule } from 'src/app/componentes/curso-form/curso-form.module';



@NgModule({
  declarations: [
    ModificarCursoComponent,
  ],
  imports: [
    CommonModule,
    ModificarCursoRoutingModule,
    ReactiveFormsModule,
    CursoFormModule,
  ]
})
export class ModificarCursoModule { }
