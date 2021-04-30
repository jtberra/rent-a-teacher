import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaSolicitudComponent } from './tarjeta-solicitud.component';



@NgModule({
  declarations: [
    TarjetaSolicitudComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TarjetaSolicitudComponent
  ]
})
export class TarjetaSolicitudModule { }
