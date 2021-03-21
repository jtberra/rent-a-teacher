import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private auth2: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  
  constructor() { 
    gapi.load('auth2', () =>{
      gapi.auth2.init({
        client_id: '1010140233470-l1sobop5af45crbj3cnv66mgg44stbnr.apps.googleusercontent.com'
      })
    })
  }
  public signin(){
    this.auth2.signIn({
      //scope
    }).then (user =>{
      this.subject.next(user)
    }).catch( () =>{
      this.subject.next(null)
    })
  }  

  public signOut(){
    this.auth2.signOut()
    .then ( () =>{
      this.subject.next(null)
    })
  }  
  
  public observable() : Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
  }

}
