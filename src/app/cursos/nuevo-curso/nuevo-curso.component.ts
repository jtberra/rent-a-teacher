import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.route.navigate(['home']);
  }
}
