import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //
  //observable del usuario que actualmente está logado
  public user$:Observable<User> = this.authSvc.afAuth.user;
  ///arreglo | item de colección del documento 'users'
  public itemUser$ = this.userSvc.user;

  //  
  
  user: User = null;
  UserForm :FormGroup;

  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user = currentUser;
    }else{
      ///REDIRECT a LOGIN 
      //window.alert('ucurrio un error al recuperrar la userdata');
    }
  }

  constructor(private route: Router, private fb:FormBuilder, private authSvc : AuthService,
    private userSvc: UserRecordService, private afs : AngularFirestore){
    this.initForm();
    this.getUser();
  }

  ngOnInit(): void {
    this.UserForm.patchValue(this.user);
  }

  onSave(){
     if(this.UserForm.valid){
      const user = this.UserForm.value
      const userId = this.user.uid;
      this.userSvc.onSaveUser(user, userId);
      this.route.navigate(['/home']);
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
      phoneNumber:['', Validators.required],
      photoURL: ['', Validators.required,],
      role:['AMBOS'],
      emailVerified:['true']
    });
  }
}
