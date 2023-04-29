import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: 'Sign in'
        }
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          title: 'Sign up'
        }
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: {
          title: 'Reset password'
        }
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'sign-in'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
