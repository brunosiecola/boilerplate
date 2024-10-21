import { Component, OnInit, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-administrators-details',
  templateUrl: './administrators-details.component.html',
  styleUrls: ['./administrators-details.component.sass']
})
export class AdministratorsDetailsComponent extends DestroyRefClass implements OnInit {

  private readonly httpService = inject(HttpService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public administrator: undefined | any = undefined;

  public formLoading: boolean = false;

  public ngOnInit(): void {

    const administratorId = this.activatedRoute.snapshot.paramMap.get('administratorId');

    this.httpService.get(`administrators/${administratorId}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.administrator = response.data;
        },
        error: (response: any) => {
          this.toastService.error(response.message);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
      });

  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpService.patch(`administrators/${this.administrator.id}`, value)
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
        })
    }
  }

}
