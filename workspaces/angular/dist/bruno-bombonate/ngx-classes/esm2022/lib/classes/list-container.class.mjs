import { Directive, inject } from '@angular/core';
import { DestroyRefClass } from './destroy-ref.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchParamType, SearchParamValueType } from '../interfaces/search-param.interface';
import { HttpParams } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { transform } from '../functions/transform.function';
import * as i0 from "@angular/core";
export class ListContainerClass extends DestroyRefClass {
    constructor() {
        super(...arguments);
        this.activatedRoute = inject(ActivatedRoute);
        this.router = inject(Router);
        this.listSearchParamsList = [];
        this.listSearchParams = {};
        this.list = [];
        this.listLength = 0;
        this.listLimit = 20;
        this.listLoading = false;
    }
    setListSearchParams() {
        const listSearchParamsList = [
            { name: 'page', type: SearchParamType.QueryParam, valueType: SearchParamValueType.Number },
            ...this.listSearchParamsList
        ];
        listSearchParamsList.forEach((searchParam) => {
            const searchParamValue = this.activatedRoute.snapshot[searchParam.type].get(searchParam.name);
            if (searchParamValue !== null) {
                this.listSearchParams[searchParam.name] = transform(searchParam, searchParamValue);
            }
            else {
                if (searchParam.name === 'page') {
                    this.listSearchParams[searchParam.name] = 1;
                }
                else {
                    this.listSearchParams[searchParam.name] = null;
                }
            }
        });
    }
    getHttpParamsString() {
        const listSearchParamsExcludingNulls = {};
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
    getList() { }
    ngOnInit() {
        this.setListSearchParams();
        this.activatedRoute.queryParams
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.getList());
    }
    handleListSearchFormChange(value) {
        this.listSearchParams.page = 1;
        this.listSearchParamsList.forEach((searchParam) => {
            const searchParamValue = value[searchParam.name];
            if (searchParamValue !== undefined) {
                this.listSearchParams[searchParam.name] = transform(searchParam, searchParamValue);
            }
        });
        const listSearchParamsExcludingTypeParam = { ...this.listSearchParams };
        this.listSearchParamsList.forEach((searchParams) => {
            if (searchParams.type === SearchParamType.Param) {
                delete listSearchParamsExcludingTypeParam[searchParams.name];
            }
        });
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: listSearchParamsExcludingTypeParam });
    }
    handleListPageChange(pageEvent) {
        this.listSearchParams.page = pageEvent.pageIndex + 1;
        const listSearchParamsExcludingTypeParam = { ...this.listSearchParams };
        this.listSearchParamsList.forEach((searchParams) => {
            if (searchParams.type === SearchParamType.Param) {
                delete listSearchParamsExcludingTypeParam[searchParams.name];
            }
        });
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: listSearchParamsExcludingTypeParam });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ListContainerClass, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.7", type: ListContainerClass, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ListContainerClass, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250YWluZXIuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMvc3JjL2xpYi9jbGFzc2VzL2xpc3QtY29udGFpbmVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBZSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUc1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQUR2RDs7UUFHcUIsbUJBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyx5QkFBb0IsR0FBa0IsRUFBRSxDQUFDO1FBQ3pDLHFCQUFnQixHQUFRLEVBQUcsQ0FBQztRQUU1QixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFZLEtBQUssQ0FBQztLQWdHckM7SUE5RlcsbUJBQW1CO1FBRTNCLE1BQU0sb0JBQW9CLEdBQUc7WUFDM0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFl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QkFEOUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlc3Ryb3lSZWZDbGFzcyB9IGZyb20gJy4vZGVzdHJveS1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFyYW0sIFNlYXJjaFBhcmFtVHlwZSwgU2VhcmNoUGFyYW1WYWx1ZVR5cGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC1wYXJhbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJy4uL2Z1bmN0aW9ucy90cmFuc2Zvcm0uZnVuY3Rpb24nO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBEZXN0cm95UmVmQ2xhc3Mge1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgYWN0aXZhdGVkUm91dGUgPSBpbmplY3QoQWN0aXZhdGVkUm91dGUpO1xyXG4gIHByb3RlY3RlZCByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcclxuXHJcbiAgcHVibGljIGxpc3RTZWFyY2hQYXJhbXNMaXN0OiBTZWFyY2hQYXJhbVtdID0gW107XHJcbiAgcHVibGljIGxpc3RTZWFyY2hQYXJhbXM6IGFueSA9IHsgfTtcclxuXHJcbiAgcHVibGljIGxpc3Q6IGFueVtdID0gW107XHJcbiAgcHVibGljIGxpc3RMZW5ndGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGxpc3RMaW1pdDogbnVtYmVyID0gMjA7XHJcbiAgcHVibGljIGxpc3RMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBzZXRMaXN0U2VhcmNoUGFyYW1zKCk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWFyY2hQYXJhbXNMaXN0ID0gW1xyXG4gICAgICB7IG5hbWU6ICdwYWdlJywgdHlwZTogU2VhcmNoUGFyYW1UeXBlLlF1ZXJ5UGFyYW0sIHZhbHVlVHlwZTogU2VhcmNoUGFyYW1WYWx1ZVR5cGUuTnVtYmVyIH0sXHJcbiAgICAgIC4uLiB0aGlzLmxpc3RTZWFyY2hQYXJhbXNMaXN0XHJcbiAgICBdO1xyXG5cclxuICAgIGxpc3RTZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFBhcmFtVmFsdWUgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90W3NlYXJjaFBhcmFtLnR5cGVdLmdldChzZWFyY2hQYXJhbS5uYW1lKTtcclxuICAgICAgaWYgKHNlYXJjaFBhcmFtVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmxpc3RTZWFyY2hQYXJhbXNbc2VhcmNoUGFyYW0ubmFtZV0gPSB0cmFuc2Zvcm0oc2VhcmNoUGFyYW0sIHNlYXJjaFBhcmFtVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzZWFyY2hQYXJhbS5uYW1lID09PSAncGFnZScpIHtcclxuICAgICAgICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc1tzZWFyY2hQYXJhbS5uYW1lXSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc1tzZWFyY2hQYXJhbS5uYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0SHR0cFBhcmFtc1N0cmluZygpOiBzdHJpbmcge1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdOdWxsczogYW55ID0geyB9O1xyXG5cclxuICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW0pID0+IHtcclxuICAgICAgY29uc3Qgc2VhcmNoUGFyYW1WYWx1ZSA9IHRoaXMubGlzdFNlYXJjaFBhcmFtc1tzZWFyY2hQYXJhbS5uYW1lXTtcclxuICAgICAgaWYgKHNlYXJjaFBhcmFtVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nTnVsbHNbc2VhcmNoUGFyYW0ubmFtZV0gPSBzZWFyY2hQYXJhbVZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbGlzdFNlYXJjaFBhcmFtc0V4Y2x1ZGluZ051bGxzIH0pO1xyXG4gICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kQWxsKHtcclxuICAgICAgb2Zmc2V0OiAodGhpcy5saXN0U2VhcmNoUGFyYW1zLnBhZ2UgLSAxKSAqIHRoaXMubGlzdExpbWl0LFxyXG4gICAgICBsaW1pdDogdGhpcy5saXN0TGltaXRcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBodHRwUGFyYW1zLnRvU3RyaW5nKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldExpc3QoKTogdm9pZCB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuc2V0TGlzdFNlYXJjaFBhcmFtcygpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXNcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveVJlZikpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXRMaXN0KCkpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVMaXN0U2VhcmNoRm9ybUNoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zLnBhZ2UgPSAxO1xyXG5cclxuICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW0pID0+IHtcclxuICAgICAgY29uc3Qgc2VhcmNoUGFyYW1WYWx1ZSA9IHZhbHVlW3NlYXJjaFBhcmFtLm5hbWVdO1xyXG4gICAgICBpZiAoc2VhcmNoUGFyYW1WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zW3NlYXJjaFBhcmFtLm5hbWVdID0gdHJhbnNmb3JtKHNlYXJjaFBhcmFtLCBzZWFyY2hQYXJhbVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGlzdFNlYXJjaFBhcmFtc0V4Y2x1ZGluZ1R5cGVQYXJhbSA9IHsgLi4uIHRoaXMubGlzdFNlYXJjaFBhcmFtcyB9O1xyXG5cclxuICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XHJcbiAgICAgIGlmIChzZWFyY2hQYXJhbXMudHlwZSA9PT0gU2VhcmNoUGFyYW1UeXBlLlBhcmFtKSB7XHJcbiAgICAgICAgZGVsZXRlIGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdUeXBlUGFyYW1bc2VhcmNoUGFyYW1zLm5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLCBxdWVyeVBhcmFtczogbGlzdFNlYXJjaFBhcmFtc0V4Y2x1ZGluZ1R5cGVQYXJhbSB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTGlzdFBhZ2VDaGFuZ2UocGFnZUV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmxpc3RTZWFyY2hQYXJhbXMucGFnZSA9IHBhZ2VFdmVudC5wYWdlSW5kZXggKyAxO1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdUeXBlUGFyYW0gPSB7IC4uLiB0aGlzLmxpc3RTZWFyY2hQYXJhbXMgfTtcclxuXHJcbiAgICB0aGlzLmxpc3RTZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xyXG4gICAgICBpZiAoc2VhcmNoUGFyYW1zLnR5cGUgPT09IFNlYXJjaFBhcmFtVHlwZS5QYXJhbSkge1xyXG4gICAgICAgIGRlbGV0ZSBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nVHlwZVBhcmFtW3NlYXJjaFBhcmFtcy5uYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSwgcXVlcnlQYXJhbXM6IGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdUeXBlUGFyYW0gfSk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19