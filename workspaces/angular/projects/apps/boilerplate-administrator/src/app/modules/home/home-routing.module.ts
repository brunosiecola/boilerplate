import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
