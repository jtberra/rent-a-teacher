import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';
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

  constructor(private route: Router, private cursoSvc : CursoRecordService) {
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

  onGoToEdit(curso:any) :void {
    this.navigationExtras.state.value = this.curso;
    this.route.navigate(['modificar-curso'], this.navigationExtras);
  }

  async onGoToDelete(idcurso:string) :Promise <void> {
    try{
      await this.cursoSvc.onDeleteCurso(idcurso);
      this.route.navigate(['cursos-impartidos']);
    }catch(err){
      console.log(err);
    }
  }
}
