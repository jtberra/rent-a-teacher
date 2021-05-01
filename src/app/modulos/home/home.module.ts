import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TarjetaSolicitudModule } from 'src/app/componentes/tarjeta-solicitud/tarjeta-solicitud.module';
import { FiltroSolicitudesPipe } from 'src/app/pipes/filtro-solicitudes.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    FiltroSolicitudesPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TarjetaSolicitudModule,
    
  ]
})

export class HomeModule { }
