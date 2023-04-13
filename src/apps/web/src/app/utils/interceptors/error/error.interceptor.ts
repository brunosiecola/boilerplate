import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { TurmalinaToastService } from '../../modules/turmalina-toast/services/turmalina-toast/turmalina-toast.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly turmalinaToastService: TurmalinaToastService,
    private readonly router: Router
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((response: any) => {
          if (response.status === 401) {
            this.authenticationService.unsetAuthentication();
            this.turmalinaToastService.error(response.error.message);
            this.router.navigate(['/']);
            return throwError(() => response.error);
          }
          return throwError(() => response.error || response);
        })
      );
  }

}
