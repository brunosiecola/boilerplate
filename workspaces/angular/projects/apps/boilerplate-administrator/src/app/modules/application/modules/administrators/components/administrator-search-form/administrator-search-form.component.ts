import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-administrator-search-form',
  templateUrl: './administrator-search-form.component.html',
  styleUrls: ['./administrator-search-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdministratorSearchFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    administratorId: new FormControl<null | number>(null),
    administratorName: new FormControl<null | string>(null),
    administratorEmail: new FormControl<null | string>(null),
    administratorStatus: new FormControl<null | boolean>(null)
  });

}
