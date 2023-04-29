import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponentClass } from '@bruno-bombonate/ngx-classes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent extends ListComponentClass { }
