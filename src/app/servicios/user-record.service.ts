import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../modulos/modelos/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserRecordService{

  user: Observable<User[]>;

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private readonly afs: AngularFirestore) {
    this.userCollection = afs.collection<User>('users');
    this.getUsers();
  }

  onDeleteCurso(idUser: string) : Promise<void>{
    return new Promise(async (resolve, reject) =>{
      try{
        const result = await this.userCollection.doc(idUser).delete();
        resolve (result);
        alert('El perfil ha sido eliminado');
      }
      catch(err){
        reject(err.message);
      }
    });
  }

  onSaveUser(user: User, idUser:string) : Promise<void>{
    return new Promise(async (resolve, reject) => {
      try{
        const uid = idUser || this.afs.createId();
        const data = {uid, ... user };
        const result = await this.userCollection.doc(uid).set(data);
        resolve(result);
        alert('Tu perfil se ha guardado con éxito!');
      } catch(err){
        reject(err.message);
        alert('Tu perfil NO se ha guardado.');
      }
    });
  }

  private getUsers() : void{ 
    this.user = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as User))
    );
  }
}
