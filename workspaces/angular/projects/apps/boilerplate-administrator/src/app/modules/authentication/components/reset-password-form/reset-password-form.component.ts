import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { passwordConfirmation } from 'utils/validators/password-confirmation.validator';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    password: new FormControl<null | string>(null, [Validators.required]),
    passwordConfirmation: new FormControl<null | string>(null, [Validators.required])
  }, { validators: passwordConfirmation('password', 'passwordConfirmation') });

}
