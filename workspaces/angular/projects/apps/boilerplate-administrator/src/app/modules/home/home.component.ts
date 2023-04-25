import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from 'projects/bruno-bombonate/ngx-classes/src/public-api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends FormComponentClass {

  public override form = new FormGroup({
    name: new FormControl<null | string>(null, [Validators.required])
  });

}
