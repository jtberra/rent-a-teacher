import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers: [AuthService],
})
export class SendEmailComponent implements OnInit {

  public user$:Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    
  }
  onSendEmail(){
    //servicio send email. 
    this.authSvc.sendVerificationEmail();
  }
  
}

