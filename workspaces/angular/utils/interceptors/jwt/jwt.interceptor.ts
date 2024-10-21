import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';

export const jwtInterceptor: HttpInterceptorFn = (httpRequest, httpHandlerFn) => {

  const authenticationService = inject(AuthenticationService);

  const authentication = authenticationService.getAuthentication();

  if (authentication) {
    const accessToken = authentication.accessToken;
    if (accessToken) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: `bearer ${accessToken}`
        }
      });
    }
  }

  return httpHandlerFn(httpRequest);

};
