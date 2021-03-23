import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './componentes/send-email/send-email.component';

const routes: Routes = [{ 
    path: 'home', 
    loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: '', 
    redirectTo: './modulos/home', 
    pathMatch: 'full'
  }, 
  { 
    path: 'login', 
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule) 
  }, 
  { 
    path: 'register', 
    loadChildren: () => import('./modulos/register/register.module').then(m => m.RegisterModule) 
  },
  {
    path: 'verification-email',
    component: SendEmailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
