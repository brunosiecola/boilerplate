import { Component, OnInit, inject } from '@angular/core';
import { NavClass } from 'utils/classes/nav.class';
import { HttpService } from 'projects/apps/boilerplate-user/src/app/utils/services/http/http.service';
import { UserService } from 'utils/services/user/user.service';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent extends NavClass implements OnInit {

  private readonly httpService = inject(HttpService);
  private readonly userService = inject(UserService);
  private readonly authenticationService = inject(AuthenticationService);
  private readonly router = inject(Router);
  private readonly toastService = inject(ToastService);

  public user: undefined | any = undefined;

  public userSignOut = new Subject<void>();

  public ngOnInit(): void {
    this.userService.user$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        takeUntil(this.userSignOut)
      )
      .subscribe((user: undefined | any) => {
        if (user !== undefined) {
          this.user = user;
        } else {
          this.httpService.get('users/me')
            .pipe(takeUntilDestroyed(this.destroyRef))
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
    this.userSignOut.next();
    this.authenticationService.unsetAuthentication();
    this.userService.user = undefined;
    this.toastService.success('You signed out successfully.');
    this.router.navigate(['/']);
  }

}
