import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-tarjeta-solicita-curso',
  templateUrl: './tarjeta-solicita-curso.component.html',
  styleUrls: ['./tarjeta-solicita-curso.component.css']
})
export class TarjetaSolicitaCursoComponent implements OnInit {

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
    this.route.navigate(['detalles-solicita-curso'], this.navigationExtras);
  }

}
