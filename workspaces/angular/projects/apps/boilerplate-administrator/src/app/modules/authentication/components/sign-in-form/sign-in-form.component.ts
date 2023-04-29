import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
    password: new FormControl<null | string>(null, [Validators.required])
  });

}
