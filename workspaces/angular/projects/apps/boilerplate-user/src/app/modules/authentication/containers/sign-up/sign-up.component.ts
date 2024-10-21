import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent extends DestroyRefClass {

  private readonly httpService = inject(HttpService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public formLoading: boolean = false;

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('users/sign-up', value)
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
