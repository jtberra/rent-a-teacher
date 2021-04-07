import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Curso } from '../cursos/modelos/curso.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoRecordService {

  curso: Observable<Curso[]>;

  private cursoCollection: AngularFirestoreCollection<Curso>;

  constructor(private readonly afs : AngularFirestore) {
    this.cursoCollection = afs.collection<Curso>('cursos');
    this.getCurso();
   }

  onDeleteCurso(idCurso: string) : Promise<void>{
    return new Promise(async (resolve, reject) =>{
      try{
        const result = await this.cursoCollection.doc(idCurso).delete();
        resolve (result);
        alert('registro enviado');
      }
      catch(err){
        reject(err.message);
      }
    });
  }

  onSaveCurso(curso: Curso, idCurso:string) : Promise<void>{
    alert('onSaveCurso');
    return new Promise(async (resolve, reject) => {
      try{
        const id = idCurso || this.afs.createId();
        const data = {id, ... curso };
        const result = await this.cursoCollection.doc(id).set(data);
        resolve(result);
        alert('registro borrado');
      } catch(err){
        reject(err.message);
      }
    });
  }
  private getCurso() : void{ 
    this.curso = this.cursoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Curso))
    );
  }
}
