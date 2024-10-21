import { NgModule } from '@angular/core';

// containers
import { AppComponent } from './app.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from '@bruno-bombonate/ngx-toast';

// functions
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// interceptors
import { jwtInterceptor } from 'utils/interceptors/jwt/jwt.interceptor';
import { errorInterceptor } from 'utils/interceptors/error/error.interceptor';

@NgModule({
  declarations: [
    // containers
    AppComponent
  ],
  bootstrap: [
    // containers
    AppComponent
  ],
  imports: [
    // modules
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ToastModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        jwtInterceptor,
        errorInterceptor
      ])
    )
  ]
})
export class AppModule { }
