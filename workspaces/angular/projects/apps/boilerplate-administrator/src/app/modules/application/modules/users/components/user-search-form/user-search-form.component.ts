import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    email: new FormControl(null),
    status: new FormControl(null)
  });

}
