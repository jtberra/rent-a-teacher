import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../modulos/modelos/user.interface';

@Injectable({ providedIn: 'root' })
 
export class AuthService { 

  public user$:Observable<User>;

  constructor(public afAuth: AngularFireAuth) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user =>{
        if(user){
          return; //user
        }else{
          return of(null);
        }
      })
    )
  }

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(error){
      console.log(error)
    }
  }

  async resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    } catch(error){
      console.log(error)
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async logIn(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.log(error);
    }
    
  }

  async Register(email:string, password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return result;
    }
    catch(error){
      console.log(error);
    }
    
  }
  async logOut(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }

}
