import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/cursos/modelos/curso.interface';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  
  curso: Curso = null;
  CursoForm: FormGroup;

  constructor(private route: Router, private fb:FormBuilder) { 
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
    console.log('actualizado', this.CursoForm.value);
  }
  //private isEmail = '/\S+@\S+.\S+/';

  private initForm() :void{
    this.CursoForm = this.fb.group({
      ///DEFINICION DEL FORMULRIO | VALIDACIONES
      id:['', [Validators.required]],
      nombre:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      //validacion email
      //campo3:['', [Validators.required, Validators.pattern(this.isEmail)]],
      mentor:['', [Validators.required]],
      tipo:['', [Validators.required]]
    });
  }

}
