import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { TarjetaCursoComponent } from '../../cursos/tarjeta-curso/tarjeta-curso.component'

@NgModule({
  declarations: [
    HomeComponent, 
    TarjetaCursoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})

export class HomeModule { }
