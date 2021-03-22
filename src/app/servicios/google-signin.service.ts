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
      this.auth2 = gapi.auth2.init({
        client_id: '1010140233470-43fju0u7537h7tu235b29tce1qp0ld3h.apps.googleusercontent.com'
      })
    })
  }
  public signIn(){
    this.auth2.signIn({
      //
      scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then ( user => {
      this.subject.next(user)
    }).catch( () => {
      this.subject.next(null)
    })
  }  

  public signOut() {
    this.auth2.signOut()
    .then ( () => {
      this.subject.next(null)
    })
  }  
  
  public observable() : Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
  }

}
