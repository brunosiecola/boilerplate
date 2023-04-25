import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
// import { BoilerplateToastModule } from 'boilerplate-toast';

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
    // BoilerplateToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
