import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/cursos/modelos/solicitud.interface';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-tarjeta-solicitud',
  templateUrl: './tarjeta-solicitud.component.html',
  styleUrls: ['./tarjeta-solicitud.component.css']
})
export class TarjetaSolicitudComponent implements OnInit {

  /*NOTA MENTAL LOS FILTROS SE HACEN CON PIPES*/
  @Input() data: any; 

  user: User = null;
  
  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user= currentUser;
    }
  }

  constructor(private route: Router, private authSvc: AuthService,
    private solicitudSvc: SolicitudesService) { 
      this.getUser();
  }

  ngOnInit(): void {
  }

  aceptar(){

    window.alert('solicitud aceptada');
  }
  async declinar(idsolicitud:string) :Promise <void> {
    try{
      await this.solicitudSvc.onDeleteSolicitud(idsolicitud);
    }catch(err){
      console.log(err);
    }
  }
}
