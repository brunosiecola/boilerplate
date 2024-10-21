import { Component, OnInit, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.sass']
})
export class UsersDetailsComponent extends DestroyRefClass implements OnInit {

  private readonly httpService = inject(HttpService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public user: undefined | any = undefined;

  public ngOnInit(): void {

    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.httpService.get(`users/${userId}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.user = response.data;
        },
        error: (response: any) => {
          this.toastService.error(response.message);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
      });

  }

}
