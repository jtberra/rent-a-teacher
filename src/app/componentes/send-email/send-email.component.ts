import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnDestroy {

  public user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }

  onSendEmail(){
    //servicio send email. 
    this.authSvc.sendVerificationEmail();
  }
  
  private checkUserIsVerefied(user:User): boolean{
    if(user &&  user.emailVerified){
      return true;
    }else if(user){
      return false;
    }else{
      return false;
    }
  }
  
  async onContinuar(){
    ///
    /// CUANDO PRECIONE CONTINUAR DEBE LOGAR AL USURIO; IMPLEMENTA NAVIGATION EXTRAS
    ///
    const user  = await this.authSvc.getCurrentUser();
    if(this.checkUserIsVerefied(user)){
      this.router.navigate(['/home']);
    }
    else{
      alert('Para continuar es necesario verificar tu email');
    }
  }

  ngOnDestroy(){
    this.authSvc.logOut();
  }
}
