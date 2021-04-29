import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { User } from '../modelos/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  async onGoogleLogin(){
    try{
      const user = await this.authSvc.loginGoogle();
      if (user){
        this.checkUserIsVerefied(user);
      }else{
        alert('cuenta no verificada')
      }
    }catch(error){
      console.log(error)
    }
  }
  
  loginForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router,
    private fb:FormBuilder) {
      this.initForm();
  }

  ngOnInit(): void {}
  
  async onLogin(){
    const { email, password } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      this.checkUserIsVerefied(user);
    }catch(error){
      console.log(error);      
    }
  }

  private checkUserIsVerefied(user:User){
    if(user &&  user.emailVerified){
      this.router.navigate(['/home'])
    }else if(user){
      this.router.navigate(['/verification-email'])
    }else{
      this.router.navigate(['/register'])
    }
  }
  private initForm() :void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  isValidField(field:string):string{
    const validatedField = this.loginForm.get(field);
    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

}

