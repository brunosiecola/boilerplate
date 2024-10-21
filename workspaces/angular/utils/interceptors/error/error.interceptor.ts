import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { Router } from '@angular/router';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (httpRequest, httpHandlerFn) => {

  const authenticationService = inject(AuthenticationService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  return httpHandlerFn(httpRequest)
    .pipe(
      catchError((response) => {
        if (response.status === 401) {
          authenticationService.unsetAuthentication();
          toastService.error(response.error.message);
          router.navigate(['/']);
        }
        return throwError(() => response.error || response);
      })
    );

};
