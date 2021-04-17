import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';

@Component({
  selector: 'app-cursos-impartidos',
  templateUrl: './cursos-impartidos.component.html',
  styleUrls: ['./cursos-impartidos.component.css']
})
export class CursosImpartidosComponent implements OnInit {

  public itemCursos$ = this.cursosSvc.curso;

  user:User = null;

  async getUser(){
    const currentUser = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user = currentUser;
    }
  }

  page_size: number = 3;
  page_number: number = 1;

  handlePage(e:PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  constructor(private router: Router, private cursosSvc: CursoRecordService, private authSvc: AuthService) { 
    this.getUser();
  }

  ngOnInit(): void {
  }

}
