import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';

// components
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ResetPasswordRequestFormComponent } from './components/reset-password-request-form/reset-password-request-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

@NgModule({
  declarations: [
    // containers
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    // components
    SignInFormComponent,
    SignUpFormComponent,
    ResetPasswordRequestFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
