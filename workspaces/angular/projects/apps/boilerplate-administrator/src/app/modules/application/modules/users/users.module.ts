import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { UsersComponent } from './users.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UsersDetailsComponent } from './containers/users-details/users-details.component';

// components
import { UserSearchFormComponent } from './components/user-search-form/user-search-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';

// pipes
import { StatusPipe } from 'utils/pipes/status/status.pipe';

@NgModule({
  declarations: [
    // containers
    UsersComponent,
    UsersListComponent,
    UsersDetailsComponent,
    // components
    UserListComponent,
    UserSearchFormComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule,
    // pipes
    StatusPipe
  ]
})
export class UsersModule { }
