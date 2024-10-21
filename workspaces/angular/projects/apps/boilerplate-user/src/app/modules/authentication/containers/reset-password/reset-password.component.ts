import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent extends DestroyRefClass {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly httpService = inject(HttpService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public token: null | string = this.activatedRoute.snapshot.queryParamMap.get('token');

  public formLoading: boolean = false;

  public handleResetPasswordRequestFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('users/reset-password', value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: any) => {
            this.toastService.success(response.message);
            this.router.navigate(['/sign-in']);
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.formLoading = false;
          }
        });
    }
  }

  public handleResetPasswordFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.patch(`users/reset-password/${this.token}`, value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: any) => {
            this.toastService.success(response.message);
            this.router.navigate(['/sign-in']);
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.formLoading = false;
          }
        });
    }
  }

}
