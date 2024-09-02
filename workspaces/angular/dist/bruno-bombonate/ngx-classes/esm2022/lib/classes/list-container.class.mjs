import { Directive } from '@angular/core';
import { OnDestroyClass } from './on-destroy.class';
import { SearchParamType, SearchParamValueType } from '../interfaces/search-param.interface';
import { HttpParams } from '@angular/common/http';
import { takeUntil } from 'rxjs';
import { transform } from '../functions/transform.function';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ListContainerClass extends OnDestroyClass {
    constructor(activatedRoute, router) {
        super();
        this.activatedRoute = activatedRoute;
        this.router = router;
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
            .pipe(takeUntil(this.onDestroy))
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListContainerClass, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: ListContainerClass, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListContainerClass, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i1.ActivatedRoute }, { type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250YWluZXIuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMvc3JjL2xpYi9jbGFzc2VzL2xpc3QtY29udGFpbmVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBZSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQUc1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYztJQVVwRCxZQUNxQixjQUE4QixFQUM5QixNQUFjO1FBRWpDLEtBQUssRUFBRSxDQUFDO1FBSFcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWNUIseUJBQW9CLEdBQWtCLEVBQUUsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBUSxFQUFHLENBQUM7UUFFNUIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFPcEMsQ0FBQztJQUVTLG1CQUFtQjtRQUUzQixNQUFNLG9CQUFvQixHQUFHO1lBQzNCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLENBQUMsTUFBTSxFQUFFO1lB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Q2pELElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO2dCQUMvQyxPQUFPLGtDQUFrQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5RDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7SUFFcEgsQ0FBQztJQUVNLG9CQUFvQixDQUFDLFNBQWM7UUFFeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVyRCxNQUFNLGtDQUFrQyxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV6RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDakQsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7Z0JBQy9DLE9BQU8sa0NBQWtDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQztJQUVwSCxDQUFDOzhHQTdHVSxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3lDbGFzcyB9IGZyb20gJy4vb24tZGVzdHJveS5jbGFzcyc7XHJcbmltcG9ydCB7IFNlYXJjaFBhcmFtLCBTZWFyY2hQYXJhbVR5cGUsIFNlYXJjaFBhcmFtVmFsdWVUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcGFyYW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICcuLi9mdW5jdGlvbnMvdHJhbnNmb3JtLmZ1bmN0aW9uJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbnRhaW5lckNsYXNzIGV4dGVuZHMgT25EZXN0cm95Q2xhc3Mge1xyXG5cclxuICBwdWJsaWMgbGlzdFNlYXJjaFBhcmFtc0xpc3Q6IFNlYXJjaFBhcmFtW10gPSBbXTtcclxuICBwdWJsaWMgbGlzdFNlYXJjaFBhcmFtczogYW55ID0geyB9O1xyXG5cclxuICBwdWJsaWMgbGlzdDogYW55W10gPSBbXTtcclxuICBwdWJsaWMgbGlzdExlbmd0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbGlzdExpbWl0OiBudW1iZXIgPSAyMDtcclxuICBwdWJsaWMgbGlzdExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldExpc3RTZWFyY2hQYXJhbXMoKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgbGlzdFNlYXJjaFBhcmFtc0xpc3QgPSBbXHJcbiAgICAgIHsgbmFtZTogJ3BhZ2UnLCB0eXBlOiBTZWFyY2hQYXJhbVR5cGUuUXVlcnlQYXJhbSwgdmFsdWVUeXBlOiBTZWFyY2hQYXJhbVZhbHVlVHlwZS5OdW1iZXIgfSxcclxuICAgICAgLi4uIHRoaXMubGlzdFNlYXJjaFBhcmFtc0xpc3RcclxuICAgIF07XHJcblxyXG4gICAgbGlzdFNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW0pID0+IHtcclxuICAgICAgY29uc3Qgc2VhcmNoUGFyYW1WYWx1ZSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Rbc2VhcmNoUGFyYW0udHlwZV0uZ2V0KHNlYXJjaFBhcmFtLm5hbWUpO1xyXG4gICAgICBpZiAoc2VhcmNoUGFyYW1WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc1tzZWFyY2hQYXJhbS5uYW1lXSA9IHRyYW5zZm9ybShzZWFyY2hQYXJhbSwgc2VhcmNoUGFyYW1WYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFBhcmFtLm5hbWUgPT09ICdwYWdlJykge1xyXG4gICAgICAgICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zW3NlYXJjaFBhcmFtLm5hbWVdID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zW3NlYXJjaFBhcmFtLm5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRIdHRwUGFyYW1zU3RyaW5nKCk6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgbGlzdFNlYXJjaFBhcmFtc0V4Y2x1ZGluZ051bGxzOiBhbnkgPSB7IH07XHJcblxyXG4gICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbSkgPT4ge1xyXG4gICAgICBjb25zdCBzZWFyY2hQYXJhbVZhbHVlID0gdGhpcy5saXN0U2VhcmNoUGFyYW1zW3NlYXJjaFBhcmFtLm5hbWVdO1xyXG4gICAgICBpZiAoc2VhcmNoUGFyYW1WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdOdWxsc1tzZWFyY2hQYXJhbS5uYW1lXSA9IHNlYXJjaFBhcmFtVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nTnVsbHMgfSk7XHJcbiAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmRBbGwoe1xyXG4gICAgICBvZmZzZXQ6ICh0aGlzLmxpc3RTZWFyY2hQYXJhbXMucGFnZSAtIDEpICogdGhpcy5saXN0TGltaXQsXHJcbiAgICAgIGxpbWl0OiB0aGlzLmxpc3RMaW1pdFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0TGlzdCgpOiB2b2lkIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5zZXRMaXN0U2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtc1xyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2V0TGlzdCgpKTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTGlzdFNlYXJjaEZvcm1DaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtcy5wYWdlID0gMTtcclxuXHJcbiAgICB0aGlzLmxpc3RTZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFBhcmFtVmFsdWUgPSB2YWx1ZVtzZWFyY2hQYXJhbS5uYW1lXTtcclxuICAgICAgaWYgKHNlYXJjaFBhcmFtVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubGlzdFNlYXJjaFBhcmFtc1tzZWFyY2hQYXJhbS5uYW1lXSA9IHRyYW5zZm9ybShzZWFyY2hQYXJhbSwgc2VhcmNoUGFyYW1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdUeXBlUGFyYW0gPSB7IC4uLiB0aGlzLmxpc3RTZWFyY2hQYXJhbXMgfTtcclxuXHJcbiAgICB0aGlzLmxpc3RTZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xyXG4gICAgICBpZiAoc2VhcmNoUGFyYW1zLnR5cGUgPT09IFNlYXJjaFBhcmFtVHlwZS5QYXJhbSkge1xyXG4gICAgICAgIGRlbGV0ZSBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nVHlwZVBhcmFtW3NlYXJjaFBhcmFtcy5uYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSwgcXVlcnlQYXJhbXM6IGxpc3RTZWFyY2hQYXJhbXNFeGNsdWRpbmdUeXBlUGFyYW0gfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUxpc3RQYWdlQ2hhbmdlKHBhZ2VFdmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zLnBhZ2UgPSBwYWdlRXZlbnQucGFnZUluZGV4ICsgMTtcclxuXHJcbiAgICBjb25zdCBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nVHlwZVBhcmFtID0geyAuLi4gdGhpcy5saXN0U2VhcmNoUGFyYW1zIH07XHJcblxyXG4gICAgdGhpcy5saXN0U2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcclxuICAgICAgaWYgKHNlYXJjaFBhcmFtcy50eXBlID09PSBTZWFyY2hQYXJhbVR5cGUuUGFyYW0pIHtcclxuICAgICAgICBkZWxldGUgbGlzdFNlYXJjaFBhcmFtc0V4Y2x1ZGluZ1R5cGVQYXJhbVtzZWFyY2hQYXJhbXMubmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLiddLCB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUsIHF1ZXJ5UGFyYW1zOiBsaXN0U2VhcmNoUGFyYW1zRXhjbHVkaW5nVHlwZVBhcmFtIH0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==