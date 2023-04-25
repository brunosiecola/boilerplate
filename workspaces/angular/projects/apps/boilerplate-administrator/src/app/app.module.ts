import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from '@bruno-bombonate/ngx-toast';

// containers
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // containers
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // modules
    ReactiveFormsModule,
    ToastModule
    // BoilerplateToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
