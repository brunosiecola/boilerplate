
# @bruno-bombonate/ngx-classes

A package with base classes that are frequently used in my Angular projects.

## Installation

```bash
npm install @bruno-bombonate/ngx-classes
```

### Compatibility table

|@bruno-bombonate/ngx-classes|Angular|
|-|-|
|1.2.0|15.x|
|2.0.0|16.x|
|3.0.0|17.x|
|18.0.0|18.x|

## Usage

### ListContainerClass

List containers are responsible for fetching data from the server. Data presentation must be made at [child component](#listcomponentclass).

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { ListContainerClass, SearchParamType, SearchParamValueType } from '@bruno-bombonate/ngx-classes';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent extends ListContainerClass implements OnInit {

  private readonly httpClient = inject(HttpClient);

  public override listSearchParamsList = [
    { name: 'id', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
    { name: 'name', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'email', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String }
  ];

  public override ngOnInit(): void {
    this.setListSearchParams();
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.getList());
  }

  protected override getList(): void {
    if (this.listLoading === false) {
      this.listLoading = true;
      const httpParamsString = this.getHttpParamsString();
      this.httpClient.get(`users?${httpParamsString}`)
        .pipe(takeUntilDestroyed(this.destroyRef))
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

List components are responsible for presenting data only. HTTP requests must be made at [parent component](#listcontainerclass).

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

Form components are responsible for manipulating data and passing it on. HTTP requests must be made at [parent component](#destroyrefclass).

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

### DestroyRefClass

This is a wildcard class that you must extend ever where is a subscription, making it easier to unsubscribe using takeUntilDestroyed.

```typescript
import { Component, inject } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.sass']
})
export class UsersAddComponent extends DestroyRefClass {

  private readonly httpClient = inject(HttpClient);

  public formLoading: boolean = false;

  public handleFormSubmit(value: any): void {
    if (this.formLoading === false) {
      this.formLoading = true;
      this.httpClient.post('users', value)
        .pipe(takeUntilDestroyed(this.destroyRef))
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
