import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnDestroy {

  public user$:Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  onSendEmail(){
    //servicio send email. 
    this.authSvc.sendVerificationEmail();
  }
  ngOnDestroy(){
    this.authSvc.logOut();
  }
}
