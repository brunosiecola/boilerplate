import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { UserService } from 'utils/services/user/user.service';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { ApplicationComponent } from '../../application.component';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent extends OnDestroyClass {

  public profile: undefined | any = undefined;

  public formLoading: boolean = false;
  public formReset: Subject<void> = new Subject();

  constructor(
    private readonly userService: UserService,
    private readonly httpService: HttpService,
    private readonly toastService: ToastService,
    public readonly applicationComponent: ApplicationComponent
  ) {
    super();
  }

  public ngOnInit(): void {
    this.userService.user$
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (user) => {
          this.profile = user;
        }
      })
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.patch('administrators/change-password', value)
        .pipe(takeUntil(this.onDestroy))
        .subscribe({
          next: (response: any) => {
            this.toastService.success(response.message);
            this.formReset.next();
            this.formLoading = false;
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.formLoading = false;
          }
        });
    }
  }

}
