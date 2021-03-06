import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'beHelper',
    loadChildren: () => import('./be-helper/be-helper.module').then(m => m.BeHelperModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  {
    path: 'ask-help',
    loadChildren: () => import('./ask-help/ask-help.module').then(m => m.AskHelpModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
