import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardEditGuard implements CanActivate {

  constructor(private authSvc: AuthService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
    return this.authSvc.user$.pipe(
      take(1),
      map((user) => user && this.authSvc.isUser(user)),
      tap((canEdit) =>{
        if(!canEdit){
          window.alert('Acceso denegado. No hemos podido comprobar tus credenciales.');
        }
      })
    );
  }
}
