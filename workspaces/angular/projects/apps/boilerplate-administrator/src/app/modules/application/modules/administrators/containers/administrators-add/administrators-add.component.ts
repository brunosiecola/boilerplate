import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-administrators-add',
  templateUrl: './administrators-add.component.html',
  styleUrls: ['./administrators-add.component.sass']
})
export class AdministratorsAddComponent extends DestroyRefClass {

  private readonly httpService = inject(HttpService);
  private readonly router = inject(Router);
  private readonly toastService = inject(ToastService);
  private readonly activatedRoute = inject(ActivatedRoute);

  public formLoading: boolean = false;

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('administrators', value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: any) => {
            this.toastService.success(response.message);
            this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.formLoading = false;
          }
        });
    }
  }

}
