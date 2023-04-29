import { Component, OnInit } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-administrators-details',
  templateUrl: './administrators-details.component.html',
  styleUrls: ['./administrators-details.component.sass']
})
export class AdministratorsDetailsComponent extends OnDestroyClass implements OnInit {

  public administrator: undefined | any = undefined;

  public formLoading: boolean = false;

  constructor(
    private readonly httpService: HttpService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    super();
  }

  public ngOnInit(): void {

    const administratorId = this.activatedRoute.snapshot.paramMap.get('administratorId');

    this.httpService.get(`administrators/${administratorId}`)
      .pipe(takeUntil(this.onDestroy))
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
        })
    }
  }

}
