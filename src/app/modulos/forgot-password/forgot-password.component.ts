import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers:[AuthService],
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onResetPassword(){
    const email = this.userEmail.value;
    try{
      await this.authSvc.resetPassword(email)
      window.alert('Revisa el correo electronico');
      this.router.navigate(['/login']);
    } catch(error){
      console.log(error)
    }
    
  }
}
