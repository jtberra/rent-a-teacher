import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public itemSolicitud$ = this.solicitudSvc.solicitud;

  constructor(public solicitudSvc:SolicitudesService) { }

  ngOnInit(): void {
  }

}
