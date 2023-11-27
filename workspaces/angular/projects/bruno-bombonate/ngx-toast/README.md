
# @bruno-bombonate/ngx-toast

A package with ToastComponent and ToastService, that you can show success and error messages.

## Installation

```bash
npm install @bruno-bombonate/ngx-toast
```

### Compatibility table

|@bruno-bombonate/ngx-toast|Angular|
|-|-|
|1.0.0|15.x|
|2.0.0|16.x|
|3.0.0|17.x|

## Usage

### app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// modules
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
    ToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.html

```html
<toast>
</toast>
```

### app.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { ToastService } from '@bruno-bombonate/ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly toastService: ToastService
  ) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.toastService.success('Lorem ipsum dolor sit amet.');
    }, 1000);
  }

}
```

### styles.sass

```scss
$TOAST_MIN_WIDTH: 390px;
$TOAST_BACKGROUND_COLOR: #000000;
$TOAST_COLOR: #FFFFFF;

$TOAST_SUCCESS_BACKGROUND_COLOR: #28A745;
$TOAST_SUCCESS_COLOR: #FFFFFF;

$TOAST_ERROR_BACKGROUND_COLOR: #DC3545;
$TOAST_ERROR_COLOR: #FFFFFF;

toast {
  position: fixed;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  display: block;
  min-width: $TOAST_MIN_WIDTH;
  width: 100%;
  text-align: center;
  padding: 0px 32px 32px 32px;
  transform: translate(0px, 100%);
}

.toast {
  display: inline-flex;
  align-items: center;
  background-color: $TOAST_BACKGROUND_COLOR;
  line-height: 1;
  text-align: left;
  color: $TOAST_COLOR;
  padding: 16px 16px 16px 16px;
  border-radius: 4px 4px 4px 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.10);
}

.toast-success {
  background-color: $TOAST_SUCCESS_BACKGROUND_COLOR;
  color: $TOAST_SUCCESS_COLOR;
}

.toast-error {
  background-color: $TOAST_ERROR_BACKGROUND_COLOR;
  color: $TOAST_ERROR_COLOR;
}
```
