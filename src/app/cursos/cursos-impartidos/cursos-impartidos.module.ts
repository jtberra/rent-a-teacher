import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosImpartidosRoutingModule } from './cursos-impartidos-routing.module';
import { CursosImpartidosComponent } from './cursos-impartidos.component';
import { TarjetaCursoModule } from '../tarjeta-curso/tarjeta-curso.module';


@NgModule({
  declarations: [CursosImpartidosComponent],
  imports: [
    CommonModule,
    CursosImpartidosRoutingModule,
    TarjetaCursoModule
  ]
})
export class CursosImpartidosModule { }
