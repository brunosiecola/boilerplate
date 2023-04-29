import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent extends OnDestroyClass {

  public formLoading: boolean = false;

  constructor(
    private readonly httpService: HttpService,
    private readonly authenticationService: AuthenticationService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    super();
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('users/sign-in', value)
        .pipe(takeUntil(this.onDestroy))
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
