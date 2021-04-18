import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public itemCursos$ = this.cursosSvc.curso;

  filterCard = '';

  page_size: number = 6;
  page_number: number = 1;

  handlePage(e:PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  constructor(private router: Router, private cursosSvc: CursoRecordService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
