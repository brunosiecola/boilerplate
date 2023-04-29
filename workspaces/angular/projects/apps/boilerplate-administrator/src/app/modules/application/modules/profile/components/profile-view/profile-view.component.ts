import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileViewComponent {

  @Input()
  profile: undefined | any = undefined;

}
