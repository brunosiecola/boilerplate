import { Injectable, Optional, Inject } from '@angular/core';
import { ControlErrors } from '../interfaces/control-errors.interface';
import { CONTROL_ERRORS } from '../constants/control-errors.constant';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  public controlErrors: ControlErrors = CONTROL_ERRORS;

  constructor(
    @Optional()
    @Inject('controlErrorsCustom')
    controlErrorsCustom: undefined | ControlErrors
  ) {
    if (controlErrorsCustom !== undefined) {
      this.controlErrors = {
        ... this.controlErrors,
        ... controlErrorsCustom
      };
    }
  }

}
