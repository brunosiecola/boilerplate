
# @bruno-bombonate/ngx-forms

A package with FormsModule containing ControlTipComponent and ControlErrorComponent.

## Installation

```bash
npm install @bruno-bombonate/ngx-forms
```

### Compatibility table

|@bruno-bombonate/ngx-forms|Angular|
|-|-|
|3.0.3|15.x|
|4.0.0|16.x|
|5.0.0|17.x|
|18.0.0|18.x|

## Usage

### Import without overriding or adding custom errors.

#### app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { AppComponent } from './app.component';

// components
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    // containers
    AppComponent,
    // components
    UserFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### user-form.component.html

Using ControlTipComponent only.

```html
<form [formGroup]="form" (ngSubmit)="handleNgSubmit()">
  <div>
    <label
      for="name">
      Name
    </label>
    <input
      type="text"
      id="name"
      formControlName="name">
    <control-tip>
      Fill this field with your full name.
    </control-tip>
  </div>
  <button
    type="submit">
    Submit
  </button>
</form>
```

Using ControlErrorComponent only.

```html
<form [formGroup]="form" (ngSubmit)="handleNgSubmit()">
  <div>
    <label
      for="name">
      Name
    </label>
    <input
      type="text"
      id="name"
      formControlName="name">
    <control-error *ngIf="controlErrorMessageIsVisible(form.controls['name'])"
      [controlErrors]="form.controls['name'].errors">
    </control-error>
  </div>
  <button
    type="submit">
    Submit
  </button>
</form>
```

Using both ControlTipComponent and ControlErrorComponent.

```html
<form [formGroup]="form" (ngSubmit)="handleNgSubmit()">
  <div>
    <label
      for="name">
      Name
    </label>
    <input
      type="text"
      id="name"
      formControlName="name">
    <ng-container [ngSwitch]="controlErrorMessageIsVisible(form.controls['name'])">
      <control-tip *ngSwitchCase="false">
        Fill this field with your full name.
      </control-tip>
      <control-error *ngSwitchCase="true"
        [controlErrors]="form.controls['name'].errors">
      </control-error>
    </ng-container>
  </div>
  <button
    type="submit">
    Submit
  </button>
</form>
```

### Import overriding or adding custom errors.

#### app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrors, FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { AppComponent } from './app.component';

// components
import { UserFormComponent } from './components/user-form/user-form.component';

// others
const controlErrorsCustom: ControlErrors = {
  required: (error: any) => 'This field is required.',
  dividedFor5: (error: any) => 'Please enter a value that is divisible by 5.',
  between: (error: any) => `Please enter a value between ${error.valueFirst} and ${error.valueSecond}.`
};

@NgModule({
  declarations: [
    // containers
    AppComponent,
    // components
    UserFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule.forRoot(controlErrorsCustom)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### user-form.component.ts

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component } from '@angular/core';
import { FormComponentClass } from 'projects/bruno-bombonate/ngx-classes/src/public-api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class AppValidators {

  static dividedFor5(control: AbstractControl): null | ValidationErrors {
    const controlValue = control.value;
    const controlValueInNumber = +controlValue;
    if (controlValueInNumber % 5 !== 0) {
      return { dividedFor5: true };
    }
    return null;
  }

  static between(valueFirst: number, valueSecond: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      const controlValue = control.value;
      const controlValueInNumber = +controlValue;
      if (controlValueInNumber < valueFirst || controlValueInNumber > valueSecond) {
        return {
          between: {
            valueFirst,
            valueSecond
          }
        };
      }
      return null;
    };
  }

}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    name: new FormControl<null | string>(null, [Validators.required]),
    value: new FormControl<null | string>(null, [Validators.required, AppValidators.dividedFor5, AppValidators.between(50, 100)])
  });

}
```

#### user-form.component.html

```html
<form [formGroup]="form">
  <div>
    <label
      for="name">
      Name
    </label>
    <input
      type="text"
      formControlName="name">
    <ng-container [ngSwitch]="controlErrorMessageIsVisible(form.controls['name'])">
      <control-tip *ngSwitchCase="false">
        Fill this field with your full name.
      </control-tip>
      <control-error *ngSwitchCase="true"
        [controlErrors]="form.controls['name'].errors">
      </control-error>
    </ng-container>
  </div>
  <div>
    <label
      for="value">
      Value
    </label>
    <input
      type="text"
      formControlName="value">
    <control-error *ngIf="controlErrorMessageIsVisible(form.controls['value'])"
      [controlErrors]="form.controls['value'].errors">
    </control-error>
  </div>
</form>
```
