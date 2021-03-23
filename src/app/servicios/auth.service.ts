import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
 
export class AuthService { 

  constructor(public afAuth: AngularFireAuth) { }

  async sendVerificationEmail(){
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
