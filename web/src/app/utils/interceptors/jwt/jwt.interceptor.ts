import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(httpRequest: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<unknown>> {
    const authentication = this.authenticationService.getAuthentication();
    if (authentication) {
      const access_token = authentication.access_token;
      if (access_token) {
        httpRequest = httpRequest.clone({
          setHeaders: {
            Authorization: `bearer ${access_token}`
          }
        });
      }
    }
    return httpHandler.handle(httpRequest);
  }
}
