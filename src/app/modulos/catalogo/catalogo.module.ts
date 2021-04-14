import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { TarjetaCursoModule } from 'src/app/cursos/tarjeta-curso/tarjeta-curso.module';

import { PaginatePipe } from '../../pipes/paginate.pipe';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from '../../servicios/paginator-es';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CatalogoComponent,
    PaginatePipe],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    TarjetaCursoModule,
    MatPaginatorModule,
    //BrowserAnimationsModule
  ],
  providers:[
    {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }]
})
export class CatalogoModule { }
