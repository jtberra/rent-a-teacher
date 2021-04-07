import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoCursoRoutingModule } from './nuevo-curso-routing.module';
import { NuevoCursoComponent } from './nuevo-curso.component';
import { CursoFormModule } from 'src/app/componentes/curso-form/curso-form.module';


@NgModule({
  declarations: [NuevoCursoComponent],
  imports: [
    CommonModule,
    NuevoCursoRoutingModule,
    CursoFormModule
  ]
})
export class NuevoCursoModule { }
