import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosImpartidosRoutingModule } from './cursos-impartidos-routing.module';
import { CursosImpartidosComponent } from './cursos-impartidos.component';
import { TarjetaCursoModule } from '../tarjeta-curso/tarjeta-curso.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginateCursosImpartidosPipe } from 'src/app/pipes/paginate-cursos-impartidos.pipe';


@NgModule({
  declarations: [
    CursosImpartidosComponent,
    PaginateCursosImpartidosPipe
  ],
  imports: [
    CommonModule,
    CursosImpartidosRoutingModule,
    TarjetaCursoModule,
    MatPaginatorModule
  ]
})
export class CursosImpartidosModule { }
