import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { BoilerplateToastModule } from 'boilerplate-toast';

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
    BoilerplateToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
