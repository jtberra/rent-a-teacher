import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  public user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) {}

  async onLogout(){
    try{
      await this.authSvc.logOut();
    }
    catch(error){
      console.log(error);
    }
  }
}
