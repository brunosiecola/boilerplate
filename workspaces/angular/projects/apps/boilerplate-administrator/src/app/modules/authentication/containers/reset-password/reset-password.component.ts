import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent extends OnDestroyClass {

  public token: null | string = this.activatedRoute.snapshot.queryParamMap.get('token');

  public formLoading: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly httpService: HttpService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    super();
  }

  public handleResetPasswordRequestFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('administrators/reset-password', value)
        .pipe(takeUntil(this.onDestroy))
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
      this.httpService.patch(`administrators/reset-password/${this.token}`, value)
        .pipe(takeUntil(this.onDestroy))
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
