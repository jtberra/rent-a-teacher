import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RoleValidator } from '../modulos/modelos/roleValidator';
import { User } from '../modulos/modelos/user.interface';

@Injectable({ providedIn: 'root' })
 
export class AuthService extends RoleValidator{ 

  public user$:Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs:AngularFirestore) { 
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) =>{
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async loginGoogle(): Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      //this.updateUserData(user)
      return user;
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

  async login(email:string, password:string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password
      );
      //this.updateUserData(user);
      return user;
    }
    catch(error){
      console.log(error);
    }
    
  }

  async register(email:string, password:string): Promise<User>{
    try{
      const {user} = await this.afAuth.createUserWithEmailAndPassword(
        email, 
        password
      );
      await this.sendVerificationEmail(); 
      this.updateUserData(user);
      return user;
    }catch(error){
      console.log(error);
    }
  }

  async logOut(): Promise<void>{
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }

  private updateUserData(user:User){
    const userRef : AngularFirestoreDocument<User> = 
      this.afs.doc(`users/${user.uid}`
    );
    const data:User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'AMBOS'
    };
    return userRef.set(data, {merge : true});
  }
  
  getCurrentUser() : Promise<User>{
    return this.afAuth.currentUser;
  }
}
