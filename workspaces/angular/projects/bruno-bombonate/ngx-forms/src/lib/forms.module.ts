import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ControlTipComponent } from './components/control-tip/control-tip.component';
import { ControlErrorComponent } from './components/control-error/control-error.component';

// interfaces
import { ControlErrors } from './interfaces/control-errors.interface';

@NgModule({
  declarations: [
    // components
    ControlTipComponent,
    ControlErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // components
    ControlTipComponent,
    ControlErrorComponent
  ]
})
export class FormsModule {

  public static forRoot(controlErrorsCustom?: ControlErrors): ModuleWithProviders<FormsModule> {
    return {
      ngModule: FormsModule,
      providers: [
        { provide: 'controlErrorsCustom', useValue: controlErrorsCustom }
      ]
    };
  }

}
