import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../cursos/modelos/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitud: Observable<Solicitud[]>;

  private SolicitudCollection: AngularFirestoreCollection<Solicitud>;

  constructor(private readonly afs : AngularFirestore) {
    this.SolicitudCollection = afs.collection<Solicitud>('solicitud');
    this.getSolicitudes();
   }

  onDeleteSolicitud(idsolicitud: string) : Promise<void>{
    return new Promise(async (resolve, reject) =>{
      try{
        const result = await this.SolicitudCollection.doc(idsolicitud).delete();
        resolve (result);
        alert('Has cancelado la solicitud');
      }
      catch(err){
        reject(err.message);
      }
    });
  }

  onSaveSolicitud(solicitud: Solicitud) : Promise<void>{
    return new Promise(async (resolve, reject) => {
      try{
        const id = this.afs.createId();
        const data = {id, ... solicitud };
        const result = await this.SolicitudCollection.doc(id).set(data);
        resolve(result);
        alert('Has enviado una solicitud para tomar este curso');
      } catch(err){
        reject(err.message);
      }
    });
  }
  private getSolicitudes() : void{ 
    this.solicitud = this.SolicitudCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Solicitud))
    );
  }
}
