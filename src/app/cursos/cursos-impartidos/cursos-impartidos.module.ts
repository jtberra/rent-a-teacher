import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosImpartidosRoutingModule } from './cursos-impartidos-routing.module';
import { CursosImpartidosComponent } from './cursos-impartidos.component';

import { TarjetaCursoComponent } from '../tarjeta-curso/tarjeta-curso.component';


@NgModule({
  declarations: [
    CursosImpartidosComponent,
    TarjetaCursoComponent, 
  ],
  imports: [
    CommonModule,
    CursosImpartidosRoutingModule
  ]
})
export class CursosImpartidosModule { }
