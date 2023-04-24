import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrors, FormsModule } from '@bruno-bombonate/ngx-forms';
// import { BoilerplateToastModule } from 'boilerplate-toast';

// containers
import { AppComponent } from './app.component';

const controlErrorsCustom: ControlErrors = {
  required: (error: any) => 'Please inform this field',
  dividedFor5: (error: any) => 'Please enter a value that is divisible by 5.',
  between: (error: any) => `Please enter a value between ${error.valueFirst} and ${error.valueSecond}.`
};

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
    FormsModule.forRoot(controlErrorsCustom)
    // BoilerplateToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
