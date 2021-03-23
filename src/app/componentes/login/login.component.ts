import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from 'src/app/servicios/google-signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
  title = 'google-Signin';

  user : gapi.auth2.GoogleUser
  
  constructor(private signInService: GoogleSigninService, private ref: ChangeDetectorRef) { 

  }
 
  ngOnInit(): void {
    this.signInService.observable().subscribe (user => {
      this.user = user
      this.ref.detectChanges()
    })
  }

  signIn () {
    this.signInService.signIn()
  }
  signOut(){
    this.signInService.signOut();
  }
}
