import { Component, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { passwordConfirmation } from 'utils/validators/password-confirmation.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent extends FormComponentClass implements OnChanges {

  public override form = new FormGroup({
    name: new FormControl<null | string>(null, [Validators.required]),
    email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
    password: new FormGroup({
      password: new FormControl<null | string>(null, [Validators.required]),
      passwordConfirmation: new FormControl<null | boolean>(null, [Validators.required]),
    }, { validators: passwordConfirmation('password', 'passwordConfirmation') })
  });

  public get passwordFormGroup(): FormGroup {
    return this.form.controls['password'] as FormGroup;
  }

  protected override mapOutputValue(value: any): any {
    const valueClone = cloneDeep(value);
    if (valueClone.password !== undefined) {
      valueClone.password = valueClone.password.password;
    }
    return valueClone;
  }

  public override ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges && simpleChanges['formData'] && simpleChanges['formData'].firstChange) {
      this.passwordFormGroup.disable();
      const valueMapped = this.mapInputValue(simpleChanges['formData'].currentValue);
      this.form.patchValue(valueMapped);
    }
  }

}
