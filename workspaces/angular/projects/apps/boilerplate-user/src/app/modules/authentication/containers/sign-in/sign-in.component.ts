import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent extends DestroyRefClass {

  private readonly httpService = inject(HttpService);
  private readonly authenticationService = inject(AuthenticationService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public formLoading: boolean = false;

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('users/sign-in', value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: any) => {
            this.authenticationService.setAuthentication(response.data, true);
            this.toastService.success(response.message);
            this.router.navigate(['/app']);
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.formLoading = false;
          }
        });
    }
  }

}
