import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) { }

  public intercept(httpRequest: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<unknown>> {
    return httpHandler.handle(httpRequest)
      .pipe(
        catchError((response) => {
          if (response.status === 401) {
            this.authenticationService.unsetAuthentication();
            this.toastService.error(response.error.message);
            this.router.navigate(['/']);
            return throwError(() => response.error);
          }
          return throwError(() => response.error || response);
        })
      );
  }

}
