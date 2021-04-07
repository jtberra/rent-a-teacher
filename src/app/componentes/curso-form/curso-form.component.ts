import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/cursos/modelos/curso.interface';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  
  curso: Curso = null;
  CursoForm: FormGroup;

  constructor(private route: Router, private fb:FormBuilder, private cursosSvc : CursoRecordService) { 
    this.initForm();
    const navigation = this.route.getCurrentNavigation();
    this.curso = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.curso === 'undefined'){
      ///REDIRECT a NUEVO CURSO
      this.route.navigate(['nuevo-curso']);
    }else{
      this.CursoForm.patchValue(this.curso);
    }
  }

  onSave(){
    if(this.CursoForm.valid){
      const curso = this.CursoForm.value
      const cursoId = this.curso?.id || null;
      this.cursosSvc.onSaveCurso(curso, cursoId);
      this.CursoForm.reset();
    }else{
      alert('el registro no es valido');   
    }
  }
  //private isEmail = '/\S+@\S+.\S+/';

  private initForm() :void{
    this.CursoForm = this.fb.group({
      ///DEFINICION DEL FORMULRIO | VALIDACIONES
      nombre:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      //validacion email
      //campo3:['', [Validators.required, Validators.pattern(this.isEmail)]],
      mentor:['', [Validators.required]],
      tipo:['', [Validators.required]]
    });
  }

}
