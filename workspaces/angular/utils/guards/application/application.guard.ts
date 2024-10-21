import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { ToastService } from '@bruno-bombonate/ngx-toast';

export const applicationGuard: CanActivateFn = (activatedRouteSnapshot, routerStateSnapshot) => {

  const authenticationService = inject(AuthenticationService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  const isLoggedIn = authenticationService.isLoggedIn();
  if (isLoggedIn) {
    return true;
  }

  toastService.error('You must be logged in to access this page.');
  router.navigate(['/']);
  return false;

};
