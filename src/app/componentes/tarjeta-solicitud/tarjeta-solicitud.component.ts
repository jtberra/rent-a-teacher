import { Component, Input, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';

@Component({
  selector: 'app-tarjeta-solicitud',
  templateUrl: './tarjeta-solicitud.component.html',
  styleUrls: ['./tarjeta-solicitud.component.css']
})
export class TarjetaSolicitudComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  aceptar(){

  }
  declinar(){

  }
}
