import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

/** FIREBASE**/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './componentes/send-email/send-email.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CursoFormModule } from './componentes/curso-form/curso-form.module';

/* FIRESTORE */
import { AngularFirestore } from '@angular/fire/firestore';

/* SERVICIO DE AUTENTIFICACIÓN */
import { AuthService } from './servicios/auth.service';
import { GuardEditGuard } from './guards/guard-edit.guard';
import { UserFormModule } from './componentes/user-form/user-form.module';
import { TarjetaCursoModule } from './cursos/tarjeta-curso/tarjeta-curso.module';
import { TarjetaSolicitaCursoModule } from './cursos/tarjeta-solicita-curso/tarjeta-solicita-curso.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    ///Modulo que provee la conexión al proyecto creado en firebase.
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    ///Modulo que integra el servicio de autenticacion. 
    AngularFireAuthModule, 
    CursoFormModule, UserFormModule, TarjetaCursoModule, TarjetaSolicitaCursoModule
  ],
  providers: [
    ///Modulo que provee la conexión con FireStore
    AngularFirestore,
    AuthService,
    GuardEditGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
