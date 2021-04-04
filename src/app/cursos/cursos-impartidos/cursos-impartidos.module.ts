import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosImpartidosRoutingModule } from './cursos-impartidos-routing.module';
import { CursosImpartidosComponent } from './cursos-impartidos.component';


@NgModule({
  declarations: [CursosImpartidosComponent],
  imports: [
    CommonModule,
    CursosImpartidosRoutingModule
  ]
})
export class CursosImpartidosModule { }
