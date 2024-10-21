
# @bruno-bombonate/ngx-authentication

A package with AuthenticationService, that you can set, get and unset authentication in Angular apps.

## Installation

```bash
npm install @bruno-bombonate/ngx-authentication
```

### Compatibility table

|@bruno-bombonate/ngx-authentication|Angular|
|-|-|
|1.0.0|15.x|
|2.0.0|16.x|
|3.0.0|17.x|
|18.0.0|18.x|

## Usage

### sign-in.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent extends DestroyRefClass {

  private readonly httpClient = inject(HttpClient);
  private readonly authenticationService = inject(AuthenticationService);

  public formLoading: boolean = false;

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpClient.post('users/sign-in')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: any) => {
            this.authenticationService.setAuthentication(response.data, value.rememberMe);
          },
          error: (response: any) => {
            this.formLoading = false;
          }
        });
    }
  }

}
```

### my-account.component.ts

```typescript
import { Component } from '@angular/core';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent {

  private readonly authenticationService = inject(AuthenticationService);

  public signOut(): void {
    this.authenticationService.unsetAuthentication();
  }

}
```
