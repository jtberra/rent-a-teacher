import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.component.html',
  styleUrls: ['./detalles-curso.component.css']
})
export class DetallesCursoComponent implements OnInit {

  value = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

}
