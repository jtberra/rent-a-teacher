import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  user: User = null;
  UserForm :FormGroup;

  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user = currentUser;
    }   
  }

  constructor(private route: Router, private fb:FormBuilder, private authSvc : AuthService){
    this.initForm();
    this.getUser();
  }

  ngOnInit(): void {
    if (typeof this.user === 'undefined'){
      ///REDIRECT a LOGIN 
      window.alert('ucurrio un error al recuperrar la userdata')
    }else{
      this.UserForm.patchValue(this.user);
    }
  }

  onSave(){
     if(this.UserForm.valid){
       console.log(this.UserForm.value)
      /*const curso = this.CursoForm.value
      const cursoId = this.curso?.id || null;
      this.cursosSvc.onSaveCurso(curso, cursoId);
      this.CursoForm.reset();*/
      alert('el registro es valido');   
    }else{
      alert('el registro no es valido');   
    }
  }

  isValidField(field:string):string{
    const validatedField = this.UserForm.get(field);
    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  

  private initForm() :void{
    this.UserForm = this.fb.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      photoURL: ['', Validators.required,],
      phoneNumber:['', Validators.required],
    });
  }
}
