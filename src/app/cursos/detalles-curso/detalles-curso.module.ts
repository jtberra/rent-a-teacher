import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesCursoRoutingModule } from './detalles-curso-routing.module';
import { DetallesCursoComponent } from './detalles-curso.component';


@NgModule({
  declarations: [DetallesCursoComponent],
  imports: [
    CommonModule,
    DetallesCursoRoutingModule
  ]
})
export class DetallesCursoModule { }
