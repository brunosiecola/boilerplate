import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import { UsersComponent } from './users.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UsersDetailsComponent } from './containers/users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: ':userId',
        component: UsersDetailsComponent,
        data: {
          title: 'User details'
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
