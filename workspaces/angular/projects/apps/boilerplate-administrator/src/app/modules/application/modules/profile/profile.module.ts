import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { ProfileComponent } from './profile.component';

// components
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';

// pipes
import { StatusPipe } from 'utils/pipes/status/status.pipe';

@NgModule({
  declarations: [
    // containers
    ProfileComponent,
    // components
    ProfileViewComponent,
    PasswordFormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule,
    // pipes
    StatusPipe
  ]
})
export class ProfileModule { }
