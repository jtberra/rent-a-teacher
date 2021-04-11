import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


// google sign in 
// service customer method
// import { GoogleSigninService } from 'src/app/servicios/google-signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //inicio de sesion con google
  //title = 'google-Signin';
  //user : gapi.auth2.GoogleUser

  async onGoogleLogin(){
    try{
      this.authSvc.loginGoogle();
      this.router.navigate(['/home'])
    }catch(error){
      console.log(error)
    }
  }

  ///inicio de sesion clasico
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router/*, 
    private signInService: GoogleSigninService, private ref: ChangeDetectorRef*/) { }

  ngOnInit(): void {
    /*this.signInService.observable().subscribe (user => {
      this.user = user
      this.ref.detectChanges()
    })*/
  }

  /*signIn () {
    this.signInService.signIn()
  }
  signOut(){
    this.signInService.signOut()
  }*/
  
  async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
      const user = this.authSvc.login(email, password)
      if(user && (await user).emailVerified){
        ///redireccionan al dashboard
        this.router.navigate(['/home'])
      }else if(user){
        this.router.navigate(['/verification-email'])
      }else{
        this.router.navigate(['/register'])
      }
    }
    catch(error){
      console.log(error);      
    }
  }

}

