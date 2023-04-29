import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { }

  public intercept(httpRequest: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<unknown>> {
    const authentication = this.authenticationService.getAuthentication();
    if (authentication !== null) {
      const accessToken = authentication.accessToken;
      if (accessToken !== undefined) {
        httpRequest = httpRequest.clone({
          setHeaders: {
            Authorization: `bearer ${accessToken}`
          }
        });
      }
    }
    return httpHandler.handle(httpRequest);
  }

}
