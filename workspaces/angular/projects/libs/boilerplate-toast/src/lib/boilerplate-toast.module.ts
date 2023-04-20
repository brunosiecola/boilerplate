import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { BoilerplateToastComponent } from './boilerplate-toast.component';

@NgModule({
  declarations: [
    // components
    BoilerplateToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // components
    BoilerplateToastComponent
  ]
})
export class BoilerplateToastModule { }
