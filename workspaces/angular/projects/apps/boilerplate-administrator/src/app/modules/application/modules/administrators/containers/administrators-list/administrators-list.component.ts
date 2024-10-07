import { Component } from '@angular/core';
import { ListContainerClass, SearchParamType, SearchParamValueType } from '@bruno-bombonate/ngx-classes';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'projects/apps/boilerplate-administrator/src/app/utils/services/http/http.service';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-administrators-list',
  templateUrl: './administrators-list.component.html',
  styleUrls: ['./administrators-list.component.sass']
})
export class AdministratorsListComponent extends ListContainerClass {

  public override listSearchParamsList = [
    { name: 'administratorId', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
    { name: 'administratorName', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'administratorEmail', type: SearchParamType.QueryParam, valueType: SearchParamValueType.String },
    { name: 'administratorStatus', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Boolean },
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
      this.httpService.get(`administrators?${httpParamsString}`)
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
