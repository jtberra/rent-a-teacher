import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.component.html',
  styleUrls: ['./detalles-curso.component.css']
})
export class DetallesCursoComponent implements OnInit {

  navigationExtras:NavigationExtras ={
    state: {
      value: null
    }
  };

  curso:any = null;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.curso = navigation?.extras?.state;
   }
 
  ngOnInit(): void {
  }

  goback():void {
    this.route.navigate(['home']);
  }
}
