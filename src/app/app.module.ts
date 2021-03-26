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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionarInformacionUsComponent } from './componentes/gestionar-informacion-us/gestionar-informacion-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    GestionarInformacionUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    ///Modulo que provee la conexión al proyecto creado en firebase.
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    ///Modulo que integra el servicio de autenticacion. 
    AngularFireAuthModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
