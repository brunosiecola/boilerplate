import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { UserService } from 'utils/services/user/user.service';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { ApplicationComponent } from '../../application.component';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent extends DestroyRefClass {

  private readonly userService = inject(UserService);
  private readonly httpService = inject(HttpService);
  private readonly toastService = inject(ToastService);
  public readonly applicationComponent = inject(ApplicationComponent);

  public profile: undefined | any = undefined;

  public formLoading: boolean = false;
  public formReset: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.userService.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (user) => {
          this.profile = user;
        }
      })
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.patch('users/change-password', value)
        .pipe(takeUntilDestroyed(this.destroyRef))
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
