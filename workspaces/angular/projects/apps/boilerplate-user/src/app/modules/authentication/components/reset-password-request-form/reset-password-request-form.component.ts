import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-request-form',
  templateUrl: './reset-password-request-form.component.html',
  styleUrls: ['./reset-password-request-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordRequestFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    email: new FormControl<null | string>(null, [Validators.required, Validators.email])
  });

}
