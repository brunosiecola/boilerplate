import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    // components
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // components
    ToastComponent
  ]
})
export class ToastModule { }
