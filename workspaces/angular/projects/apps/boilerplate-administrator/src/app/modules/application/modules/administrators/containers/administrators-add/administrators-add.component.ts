import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-administrators-add',
  templateUrl: './administrators-add.component.html',
  styleUrls: ['./administrators-add.component.sass']
})
export class AdministratorsAddComponent extends OnDestroyClass {

  public formLoading: boolean = false;

  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly toastService: ToastService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.post('administrators', value)
        .pipe(takeUntil(this.onDestroy))
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
