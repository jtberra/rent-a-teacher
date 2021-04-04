import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoCursoRoutingModule } from './nuevo-curso-routing.module';
import { NuevoCursoComponent } from './nuevo-curso.component';


@NgModule({
  declarations: [NuevoCursoComponent],
  imports: [
    CommonModule,
    NuevoCursoRoutingModule
  ]
})
export class NuevoCursoModule { }
