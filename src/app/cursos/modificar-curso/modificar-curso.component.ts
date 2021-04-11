import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {}

  goBack(){
    this.route.navigate(['home']);
  }
}