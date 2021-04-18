import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesSolicitaCursoRoutingModule } from './detalles-solicita-curso-routing.module';
import { DetallesSolicitaCursoComponent } from './detalles-solicita-curso.component';


@NgModule({
  declarations: [DetallesSolicitaCursoComponent],
  imports: [
    CommonModule,
    DetallesSolicitaCursoRoutingModule
  ]
})
export class DetallesSolicitaCursoModule { }
