import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';

@Component({
  selector: 'app-cursos-impartidos',
  templateUrl: './cursos-impartidos.component.html',
  styleUrls: ['./cursos-impartidos.component.css']
})
export class CursosImpartidosComponent implements OnInit {

  itemCursos$ = this.cursosSvc.curso;

  constructor(private router: Router, private cursosSvc: CursoRecordService) { }

  ngOnInit(): void {
  }

}
