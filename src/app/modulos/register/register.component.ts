import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modelos/user.interface';
import {  AuthService } from './../../servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit(): void { }

  async onRegister(){
    const { email, password } = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);  
      if(user){
        this.checkUserIsVerefied(user);
      }
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

}

