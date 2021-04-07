import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Curso } from '../modelos/curso.interface';

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

  curso:Curso = null;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.curso = navigation?.extras?.state?.value;
   }
 
  ngOnInit(): void {
    if (typeof this.curso === 'undefined'){
      ///REDIRECT a NUEVO CURSO
      this.route.navigate(['nuevo-curso']);
    }
  }

  goback():void {
    this.route.navigate(['cursos-impartidos']);
  }

  onGoToEdit() :void {
    this.navigationExtras.state.value = this.curso;
    this.route.navigate(['modificar-curso'], this.navigationExtras);
  }

  onGoToDelete() : void {
    alert('La acción borrará el registro de tu curso ## para siempre');
  }
}
