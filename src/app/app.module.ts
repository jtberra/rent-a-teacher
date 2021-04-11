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
    AngularFireAuthModule, CursoFormModule
  ],
  providers: [
    ///Modulo que provee la conexión con FireStore
    AngularFirestore,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
