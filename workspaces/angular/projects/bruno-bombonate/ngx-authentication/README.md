
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

## Usage

### sign-in.component.ts

```typescript
import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { AuthenticationService } from '@bruno-bombonate/ngx-authentication';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent extends OnDestroyClass {

  public formLoading: boolean = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) {
    super();
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpClient.post('users/sign-in')
        .pipe(takeUntil(this.onDestroy))
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

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { }

  public signOut(): void {
    this.authenticationService.unsetAuthentication();
  }

}
```
