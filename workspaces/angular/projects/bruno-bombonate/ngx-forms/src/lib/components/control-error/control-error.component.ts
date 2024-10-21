import { Component, ChangeDetectionStrategy, inject, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { ControlErrors } from '../../interfaces/control-errors.interface';

@Component({
  selector: 'control-error',
  templateUrl: './control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {

  private readonly formsService = inject(FormsService);

  @Input()
  public controlErrors: null | ControlErrors = null;

  public get controlErrorMessage(): undefined | string {
    const controlErrors = this.controlErrors;
    if (controlErrors !== null) {
      for (const key in controlErrors) {
        const controlError = this.formsService.controlErrors[key];
        if (controlError === undefined) {
          throw Error(`${key} error is not defined at controlErrors object. If you are using a custom validator use FormsModule.forRoot(controlErrorsCustom).`);
        }
        return controlError(controlErrors[key]);
      }
    }
    return undefined;
  }

}
