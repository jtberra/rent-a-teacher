import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';
import { Curso } from '../modelos/curso.interface';
import { Solicitud } from '../modelos/solicitud.interface';

@Component({
  selector: 'app-tarjeta-solicita-curso',
  templateUrl: './tarjeta-solicita-curso.component.html',
  styleUrls: ['./tarjeta-solicita-curso.component.css']
})
export class TarjetaSolicitaCursoComponent implements OnInit {

  public itemUser$ = this.userSvc.user;

  @Input() data: any;

  curso: Curso = null;
  user: User = null;
  solicitud : Solicitud = null;

  uid : string = null;

  SolicitudForm: FormGroup;

  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user= currentUser;
      this.initForm(this.user.uid);
    }
  }

  navigationExtras: NavigationExtras ={
    state: {
      value: null
    }
  };

  constructor(private route: Router, private userSvc:UserRecordService, private fb:FormBuilder, 
    private cursosSvc : CursoRecordService, private authSvc: AuthService, private solicitudSvc:SolicitudesService) { 
        this.getUser(); 
        const navigation = this.route.getCurrentNavigation();
        this.curso = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
  }
  
  onGoToDetails(item:any):void {
    this.navigationExtras.state.value = item;
    this.route.navigate(['detalles-solicita-curso'], this.navigationExtras);
  }

  onGoToSolicitar(item:any) :void {
    if(this.SolicitudForm.valid){
      const solicitud = this.SolicitudForm.value
      this.solicitudSvc.onSaveSolicitud(solicitud);
      this.SolicitudForm.reset();
    }else{
      alert('el registro no es valido');   
    }
  }

  private initForm(uid:string) :void{
    this.SolicitudForm = this.fb.group({
      idmentee:[uid],
      
      /* 
      idsolicitud:    string;
      idmentee:       string;
      idcurso:        string;
      estado:         string;
      notificacion:   string;
      */ 
    });
  }
}
