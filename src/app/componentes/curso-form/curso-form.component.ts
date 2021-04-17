import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/cursos/modelos/curso.interface';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoRecordService } from 'src/app/servicios/curso-record.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  
  curso: Curso = null;
  user: User = null;

  uid : string = null;

  CursoForm: FormGroup;


  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user= currentUser;
      this.initForm(this.user.uid);
    }
  }

  constructor(private route: Router, private fb:FormBuilder, private cursosSvc : CursoRecordService, 
    private authSvc: AuthService)
  {
    this.getUser(); 
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

  isValidField(field:string):string{
    const validatedField = this.CursoForm.get(field);
    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';  
  }

  private initForm(uid:string) :void{
    this.CursoForm = this.fb.group({
      nombre:['', [Validators.required]],
      nombreLargo:['', Validators.required],
      descripcion:['', [Validators.required, Validators.maxLength(500)]],
      disponibilidad:['', Validators.required],
      prerequisitos:['', Validators.required],
      condicionesCheck:[Validators.required, Validators.requiredTrue],
      estado:[''],
      tipo:[''],
      mentor:[uid]
    });
  }
}
