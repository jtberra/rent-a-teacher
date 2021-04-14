import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { TarjetaCursoModule } from 'src/app/cursos/tarjeta-curso/tarjeta-curso.module';

import { PaginatePipe } from '../../pipes/paginate.pipe';
//import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CatalogoComponent,
    PaginatePipe],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    TarjetaCursoModule,
    //MatPaginatorModule
  ]
})
export class CatalogoModule { }
