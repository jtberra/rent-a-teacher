import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css']
})
export class TarjetaCursoComponent {

  @Input() data: any;

  navigationExtras: NavigationExtras ={
    state: {
      value: null
    }
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onGoToDetails(item:any):void {
    this.navigationExtras.state.value = item;
    this.route.navigate(['detalles-curso'], this.navigationExtras);
  }
}
