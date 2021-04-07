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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
