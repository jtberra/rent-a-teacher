import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCursoComponent } from './tarjeta-curso.component';



@NgModule({
  declarations: [TarjetaCursoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TarjetaCursoComponent
  ]
})
export class TarjetaCursoModule { }
