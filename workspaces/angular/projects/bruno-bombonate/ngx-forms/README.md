
# @bruno-bombonate/ngx-forms

A package with FormsModule containing FormControlTipComponent and FormControlErrorComponent.

## Installation

```bash
npm install @bruno-bombonate/ngx-forms
```

## Usage

### app.module.ts

Import FormsModule to your module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

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
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.html

```html
<form [formGroup]="form" (ngSubmit)="handleNgSubmit()">
  <label
    for="name">
    Name
  </label>
  <input
    type="text"
    id="name"
    formControlName="name">
  <ng-container [ngSwitch]="form.controls['name'].errors === null">
    <ng-container *ngSwitchCase="true">
      <form-control-tip>
        Fill this field with your full name.
      </form-control-tip>
    </ng-container>
    <ng-container *ngSwitchCase="false">
      <form-control-error
        [formControl]="form.controls['name']">
      </form-control-error>
    </ng-container>
  </ng-container>
  <button
    type="submit">
    Submit
  </button>
</form>
```
