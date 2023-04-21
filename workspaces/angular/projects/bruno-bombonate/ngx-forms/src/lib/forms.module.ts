import { NgModule } from '@angular/core';

// components
import { FormControlTipComponent } from './components/form-control-tip/form-control-tip.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';

@NgModule({
  declarations: [
    // components
    FormControlTipComponent,
    FormControlErrorComponent
  ],
  exports: [
    // components
    FormControlTipComponent,
    FormControlErrorComponent
  ]
})
export class FormsModule { }
