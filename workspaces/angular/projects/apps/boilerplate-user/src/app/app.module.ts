import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from '@bruno-bombonate/ngx-toast';

// containers
import { AppComponent } from './app.component';

// interceptors
import { JwtInterceptor } from 'utils/interceptors/jwt/jwt.interceptor';
import { ErrorInterceptor } from 'utils/interceptors/error/error.interceptor';

@NgModule({
  declarations: [
    // containers
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // modules
    HttpClientModule,
    ToastModule
  ],
  providers: [
    // interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
