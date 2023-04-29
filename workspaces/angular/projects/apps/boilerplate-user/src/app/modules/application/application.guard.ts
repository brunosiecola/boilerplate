import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { ToastService } from '@bruno-bombonate/ngx-toast';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuard implements CanActivate {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) { }

  public canActivate(): boolean {
    const isLoggedIn = this.authenticationService.isLoggedIn();
    if (isLoggedIn === true) {
      return true;
    } else {
      this.toastService.error('You must be logged in to access this page.');
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
