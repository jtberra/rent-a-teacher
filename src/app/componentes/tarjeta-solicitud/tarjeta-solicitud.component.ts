import { Component, Input, OnInit } from '@angular/core';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';

@Component({
  selector: 'app-tarjeta-solicitud',
  templateUrl: './tarjeta-solicitud.component.html',
  styleUrls: ['./tarjeta-solicitud.component.css']
})
export class TarjetaSolicitudComponent implements OnInit {

  /*NOTA MENTAL LOS FILTROS SE HACEN CON PIPES*/
  @Input() data: any; 

  constructor() { }

  ngOnInit(): void {
  }

  aceptar(){
    window.alert('solicitud aceptada');
  }
  declinar(){
    window.alert('solicitud declinada');
  }
}
