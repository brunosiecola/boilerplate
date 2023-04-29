import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserViewComponent {

  @Input()
  public user: undefined | any = undefined;

}
