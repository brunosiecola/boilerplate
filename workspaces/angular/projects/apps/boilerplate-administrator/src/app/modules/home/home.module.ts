import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
