
# @bruno-bombonate/ngx-classes

A package with base classes that are frequently used in my Angular projects.

## Installation

```bash
npm install @bruno-bombonate/ngx-classes
```

## Usage

### ListContainerClass

List containers are responsible for fetching data from the server. Data presentation must be made at [child component](###ListComponentClass).

```typescript
import { Component, OnInit } from '@angular/core';
import { ListContainerClass, SearchParamType, SearchParamValueType } from '@bruno-bombonate/ngx-classes';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent extends ListContainerClass implements OnInit {

  public override listSearchParamsList = [
    { name: 'id', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
    { name: 'name', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'email', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String }
  ];

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    private readonly httpClient: HttpClient
  ) {
    super(activatedRoute, router);
  }

  public override ngOnInit(): void {
    this.setListSearchParams();
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => this.getList());
  }

  protected override getList(): void {
    if (this.listLoading === false) {
      this.listLoading = true;
      const httpParamsString = this.getHttpParamsString();
      this.httpClient.get(`users?${httpParamsString}`)
        .pipe(takeUntil(this.onDestroy))
        .subscribe({
          next: (response: any) => {
            this.list = response.data;
            this.listLength = response.length;
            this.listLoading = false;
          },
          error: (response: any) => {
            this.listLoading = false;
          }
        });
    }
  }

}
```

### ListComponentClass

List components are responsible for presenting data only. HTTP requests must be made at [parent component](###ListContainerClass).

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponentClass } from '@bruno-bombonate/ngx-classes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent extends ListComponentClass { }
```

### FormComponentClass

Form components are responsible for manipulating data and passing it on. HTTP requests must be made at [parent component](###OnDestroyClass).

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponentClass } from '@bruno-bombonate/ngx-classes';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent extends FormComponentClass {

  public override form = new FormGroup({
    name: new FormControl<null | string>(null),
    email: new FormControl<null | string>(null),
    password: new FormControl<null | string>(null)
  });

}
```

### OnDestroyClass

This is a wildcard class that you must extend ever where is a subscription, making it easier to unsubscribe using takeUntil.

```typescript
import { Component } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.sass']
})
export class UsersAddComponent extends OnDestroyClass {

  public formLoading: boolean = false;

  constructor(
    private readonly httpClient: HttpClient
  ) {
    super();
  }

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpClient.post('users', value)
        .pipe(takeUntil(this.onDestroy))
        .subscribe({
          next: (response: any) => {
          },
          error: (response: any) => {
            this.formLoading = false;
          }
        });
    }
  }

}
```
