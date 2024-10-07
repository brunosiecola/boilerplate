import { Component } from '@angular/core';
import { ListContainerClass, SearchParamType, SearchParamValueType } from '@bruno-bombonate/ngx-classes';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent extends ListContainerClass {

  public override listSearchParamsList = [
    { name: 'userId', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
    { name: 'userName', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'userEmail', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'userStatus', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Boolean },
    { name: 'orderBy', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'orderByDirection', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String }
  ];

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    private readonly httpService: HttpService,
    private readonly toastService: ToastService
  ) {
    super(activatedRoute, router);
  }

  protected override getList(): void {
    if (this.listLoading === false) {
      this.listLoading = true;
      const httpParamsString = this.getHttpParamsString();
      this.httpService.get(`users?${httpParamsString}`)
        .pipe(takeUntil(this.onDestroy))
        .subscribe({
          next: (response: any) => {
            this.list = response.data;
            this.listLength = response.length;
            this.listLoading = false;
          },
          error: (response: any) => {
            this.toastService.error(response.message);
            this.listLoading = false;
          }
        });
    }
  }

}

