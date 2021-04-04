import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosAsignadosRoutingModule } from './cursos-asignados-routing.module';
import { CursosAsignadosComponent } from './cursos-asignados.component';


@NgModule({
  declarations: [CursosAsignadosComponent],
  imports: [
    CommonModule,
    CursosAsignadosRoutingModule
  ]
})
export class CursosAsignadosModule { }
