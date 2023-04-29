import { Component, OnInit } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.sass']
})
export class UsersDetailsComponent extends OnDestroyClass implements OnInit {

  public user: undefined | any = undefined;

  constructor(
    private readonly httpService: HttpService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    super();
  }

  public ngOnInit(): void {

    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.httpService.get(`users/${userId}`)
      .pipe(takeUntil(this.onDestroy))
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
