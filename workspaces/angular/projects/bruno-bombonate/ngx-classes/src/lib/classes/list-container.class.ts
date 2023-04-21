import { Directive } from '@angular/core';
import { OnDestroyClass } from './on-destroy.class';
import { SearchParam, SearchParamType, SearchParamValueType } from '../interfaces/search-param.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { takeUntil } from 'rxjs';
import { transform } from '../functions/transform.function';

@Directive()
export class ListContainerClass extends OnDestroyClass {

  public listSearchParamsList: SearchParam[] = [];
  public listSearchParams: any = { };

  public list: any[] = [];
  public listLength: number = 0;
  public listLimit: number = 20;
  public listLoading: boolean = false;

  constructor(
    protected readonly activatedRoute: ActivatedRoute,
    protected readonly router: Router
  ) {
    super();
  }

  protected setListSearchParams(): void {

    const listSearchParamsList = [
      { name: 'page', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
      ... this.listSearchParamsList
    ];

    listSearchParamsList.forEach((searchParam) => {
      const searchParamValue = this.activatedRoute.snapshot[searchParam.type].get(searchParam.name);
      if (searchParamValue !== null) {
        this.listSearchParams[searchParam.name] = transform(searchParam, searchParamValue);
      } else {
        if (searchParam.name === 'page') {
          this.listSearchParams[searchParam.name] = 1;
        } else {
          this.listSearchParams[searchParam.name] = null;
        }
      }
    });

  }

  protected getHttpParamsString(): string {

    const listSearchParamsExcludingNulls: any = { };

    this.listSearchParamsList.forEach((searchParam) => {
      const searchParamValue = this.listSearchParams[searchParam.name];
      if (searchParamValue !== null) {
        listSearchParamsExcludingNulls[searchParam.name] = searchParamValue;
      }
    });

    let httpParams = new HttpParams({ fromObject: listSearchParamsExcludingNulls });
    httpParams = httpParams.appendAll({
      offset: (this.listSearchParams.page - 1) * this.listLimit,
      limit: this.listLimit
    });

    return httpParams.toString();

  }

  protected getList(): void { }

  public ngOnInit(): void {

    this.setListSearchParams();

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => this.getList());

  }

  public handleListSearchFormChange(value: any): void {

    this.listSearchParams.page = 1;

    this.listSearchParamsList.forEach((searchParam) => {
      const searchParamValue = value[searchParam.name];
      if (searchParamValue !== undefined) {
        this.listSearchParams[searchParam.name] = transform(searchParam, searchParamValue);
      }
    });

    const listSearchParamsExcludingTypeParam = { ... this.listSearchParams };

    this.listSearchParamsList.forEach((searchParams) => {
      if (searchParams.type === SearchParamType.Param) {
        delete listSearchParamsExcludingTypeParam[searchParams.name];
      }
    });

    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: listSearchParamsExcludingTypeParam });

  }

  public handleListPageChange(pageEvent: any): void {

    this.listSearchParams.page = pageEvent.pageIndex + 1;

    const listSearchParamsExcludingTypeParam = { ... this.listSearchParams };

    this.listSearchParamsList.forEach((searchParams) => {
      if (searchParams.type === SearchParamType.Param) {
        delete listSearchParamsExcludingTypeParam[searchParams.name];
      }
    });

    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: listSearchParamsExcludingTypeParam });

  }

}
