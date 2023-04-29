import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordConfirmation } from 'utils/validators/password-confirmation.validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    passwordCurrent: new FormControl<null | string>(null, [Validators.required]),
    passwordNew: new FormControl<null | string>(null, [Validators.required]),
    passwordNewConfirmation: new FormControl<null | string>(null, [Validators.required])
  }, { validators: passwordConfirmation('passwordNew', 'passwordNewConfirmation') });

}
