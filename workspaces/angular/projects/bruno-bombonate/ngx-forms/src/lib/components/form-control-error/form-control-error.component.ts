import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FORM_CONTROL_ERRORS } from '../../constants/form-control-errors.constant';
import { FormControlErrorFunction, FormControlErrorString } from '../../interfaces/form-control-errors.interface';

@Component({
  selector: 'form-control-error',
  templateUrl: './form-control-error.component.html'
})
export class FormControlErrorComponent {

  @Input()
  public formControl: undefined | AbstractControl = undefined;

  public get formControlErrorMessage(): string {
    if (this.formControl !== undefined && (this.formControl.touched || this.formControl.dirty)) {
      if (this.formControl.errors !== null) {
        for (const key in this.formControl.errors) {
          switch (key) {
            case 'min':
              return (FORM_CONTROL_ERRORS[key] as FormControlErrorFunction)(this.formControl.errors['min'].min);
            case 'max':
              return (FORM_CONTROL_ERRORS[key] as FormControlErrorFunction)(this.formControl.errors['max'].max);
            case 'minlength':
              return (FORM_CONTROL_ERRORS[key] as FormControlErrorFunction)(this.formControl.errors['minlength'].minlength);
            case 'maxlength':
              return (FORM_CONTROL_ERRORS[key] as FormControlErrorFunction)(this.formControl.errors['maxlength'].maxlength);
            default:
              return (FORM_CONTROL_ERRORS[key] as FormControlErrorString);
          }
        }
      }
    }
    return '';
  }

}
