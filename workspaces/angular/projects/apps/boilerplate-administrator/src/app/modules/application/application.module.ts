import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';

// containers
import { ApplicationComponent } from './application.component';

@NgModule({
  declarations: [
    // containers
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
