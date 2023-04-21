import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { BoilerplateToastModule } from 'boilerplate-toast';

// containers
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    // containers
    AppComponent,
    HomeComponent
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
