import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/modulos/modelos/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserRecordService } from 'src/app/servicios/user-record.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public user$:Observable<User> = this.authSvc.afAuth.user;

  public itemUser$ = this.userSvc.user;

  user: User = null;

  async getUser() {
    const currentUser:User = await this.authSvc.getCurrentUser();
    if(currentUser){
      this.user = currentUser;
    }else{
      ///REDIRECT a LOGIN 
      //window.alert('ucurrio un error al recuperrar la userdata');
    }
  }

  constructor(private authSvc: AuthService, private userSvc: UserRecordService) {
    this.getUser();
   }

  ngOnInit(): void {
  }

}
