import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponentClass } from '@bruno-bombonate/ngx-classes';

@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdministratorListComponent extends ListComponentClass { }
