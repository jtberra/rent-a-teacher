import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-tarjeta-solicitud',
  templateUrl: './tarjeta-solicitud.component.html',
  styleUrls: ['./tarjeta-solicitud.component.css']
})
export class TarjetaSolicitudComponent implements OnInit {

  /*NOTA MENTAL LOS FILTROS SE HACEN CON PIPES*/
  @Input() data: any; 

  public itemCurso$= this.cursoSvc.curso;
  public itemUser$ = this.userSvc.user;

  user: User = null;
  
  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user= currentUser;
    }
  }

  constructor(private cursoSvc : CursoRecordService, public userSvc: UserRecordService,
    private authSvc: AuthService) { 
      this.getUser();
  }

  ngOnInit(): void {
  }

  aceptar(){
    window.alert('solicitud aceptada');
  }
  declinar(){
    window.alert('solicitud declinada');
  }
}
