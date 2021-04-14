import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  itemCursos$ = this.cursosSvc.curso;

  constructor(private router: Router, private cursosSvc: CursoRecordService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
