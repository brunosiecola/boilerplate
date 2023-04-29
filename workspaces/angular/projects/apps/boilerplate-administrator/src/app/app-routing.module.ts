import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { ApplicationGuard } from './modules/application/application.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule),
    canActivate: [ApplicationGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
