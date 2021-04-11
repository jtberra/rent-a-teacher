import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './componentes/send-email/send-email.component';
import { GuardEditGuard } from './guards/guard-edit.guard';

const routes: Routes = [{
    path: '', 
    redirectTo: './modulos/home', 
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule),
    canActivate:[GuardEditGuard],
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
  },
  { path: 'forgot-password', 
    loadChildren: () => import('./modulos/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
  },
  { 
    path: 'nuevo-curso', 
    loadChildren: () => import('./cursos/nuevo-curso/nuevo-curso.module').then(m => m.NuevoCursoModule),
    canActivate:[GuardEditGuard]
  },
  { path: 'cursos-impartidos', 
    loadChildren: () => import('./cursos/cursos-impartidos/cursos-impartidos.module').then(m => m.CursosImpartidosModule),
    canActivate:[GuardEditGuard]
  },
  { path: 'cursos-asignados', 
    loadChildren: () => import('./cursos/cursos-asignados/cursos-asignados.module').then(m => m.CursosAsignadosModule),
    canActivate:[GuardEditGuard]
  },
  { path: 'modificar-curso', 
    loadChildren: () => import('./cursos/modificar-curso/modificar-curso.module').then(m => m.ModificarCursoModule), 
    canActivate:[GuardEditGuard]
  },
  { path: 'detalles-curso', 
    loadChildren: () => import('./cursos/detalles-curso/detalles-curso.module').then(m => m.DetallesCursoModule),
    canActivate:[GuardEditGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
