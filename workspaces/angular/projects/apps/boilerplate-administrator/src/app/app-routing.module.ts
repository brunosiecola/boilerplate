import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      meta: {
        description: 'Lorem ipsum dolor sit amet.'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
