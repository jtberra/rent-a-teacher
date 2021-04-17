import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css']
})
export class TarjetaCursoComponent {

  public itemUser$ = this.userSvc.user;

  @Input() data: any;

  navigationExtras: NavigationExtras ={
    state: {
      value: null
    }
  };

  constructor(private route: Router, private userSvc:UserRecordService) { 

  }

  ngOnInit(): void {
  }
  
  onGoToDetails(item:any):void {
    this.navigationExtras.state.value = item;
    this.route.navigate(['detalles-curso'], this.navigationExtras);
  }
}
