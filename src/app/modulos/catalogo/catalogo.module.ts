import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { TarjetaCursoModule } from 'src/app/cursos/tarjeta-curso/tarjeta-curso.module';


@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    TarjetaCursoModule
  ]
})
export class CatalogoModule { }
