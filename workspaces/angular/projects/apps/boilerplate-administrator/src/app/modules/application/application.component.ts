import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NavClass } from 'utils/classes/nav.class';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { UserService } from 'utils/services/user/user.service';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent extends NavClass implements OnInit, OnDestroy {

  public user: undefined | any = undefined;

  constructor(
    @Inject(PLATFORM_ID)
    platformId: any,
    private readonly httpService: HttpService,
    private readonly userService: UserService,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {
    super(platformId);
  }

  public ngOnInit(): void {
    this.userService.user$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((user: undefined | any) => {
        if (user !== undefined) {
          this.user = user;
        } else {
          this.httpService.get('administrators/me')
            .pipe(takeUntil(this.onDestroy))
            .subscribe({
              next: (response: any) => {
                this.userService.user = response.data;
              },
              error: () => {
                this.authenticationService.unsetAuthentication();
                this.router.navigate(['/']);
              }
            });
        }
      });
  }

  public handleSignOut(): void {
    this.onDestroy.next();
    this.authenticationService.unsetAuthentication();
    this.userService.user = undefined;
    this.toastService.success('You signed out successfully.');
    this.router.navigate(['/']);
  }

}
