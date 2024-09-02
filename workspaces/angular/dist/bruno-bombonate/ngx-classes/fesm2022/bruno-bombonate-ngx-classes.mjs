import * as i0 from '@angular/core';
import { Directive, Input, EventEmitter, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import * as i1 from '@angular/router';
import { FormGroup } from '@angular/forms';
import { takeUntil as takeUntil$1, distinctUntilChanged, debounceTime } from 'rxjs/operators';

class OnDestroyClass {
    constructor() {
        this.onDestroy = new Subject();
    }
    ngOnDestroy() {
        this.onDestroy.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnDestroyClass, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: OnDestroyClass, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnDestroyClass, decorators: [{
            type: Directive
        }] });

var SearchParamType;
(function (SearchParamType) {
    SearchParamType["Param"] = "paramMap";
    SearchParamType["QueryParam"] = "queryParamMap";
})(SearchParamType || (SearchParamType = {}));
var SearchParamValueType;
(function (SearchParamValueType) {
    SearchParamValueType["Number"] = "number";
    SearchParamValueType["String"] = "string";
    SearchParamValueType["Boolean"] = "boolean";
})(SearchParamValueType || (SearchParamValueType = {}));

const transformNumber = (value) => {
    const valueTypeOfIsNumber = typeof value === 'number';
    const valueTypeOfIsString = typeof value === 'string';
    const valueIsNotEmpty = value !== '';
    if (valueTypeOfIsNumber) {
        return value;
    }
    else if (valueTypeOfIsString && valueIsNotEmpty) {
        const valueInNumber = +value;
        const valueIsNumber = isNaN(valueInNumber) === false;
        if (valueIsNumber) {
            return valueInNumber;
        }
    }
    return null;
};

const transformString = (value) => {
    const valueTypeOfIsNumber = typeof value === 'number';
    const valueTypeOfIsBoolean = typeof value === 'boolean';
    const valueIsNotEmpty = value !== '';
    if (valueTypeOfIsNumber) {
        return value.toString();
    }
    else if (valueTypeOfIsBoolean) {
        return value.toString();
    }
    else if (valueIsNotEmpty) {
        return value;
    }
    return null;
};

const transformBoolean = (value) => {
    const valueTypeOfIsBoolean = typeof value === 'boolean';
    const valueTypeOfIsString = typeof value === 'string';
    if (valueTypeOfIsBoolean) {
        return value;
    }
    else if (valueTypeOfIsString) {
        if (value === 'true') {
            return true;
        }
        else if (value === 'false') {
            return false;
        }
    }
    return null;
};

const transform = (searchParam, searchParamValue) => {
    if (searchParam.valueType === SearchParamValueType.Number) {
        return transformNumber(searchParamValue);
    }
    else if (searchParam.valueType === SearchParamValueType.String) {
        return transformString(searchParamValue);
    }
    else if (searchParam.valueType === SearchParamValueType.Boolean) {
        return transformBoolean(searchParamValue);
    }
    return null;
};

class ListContainerClass extends OnDestroyClass {
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

class ListComponentClass {
    constructor() {
        this.list = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListComponentClass, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: ListComponentClass, inputs: { list: "list" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListComponentClass, decorators: [{
            type: Directive
        }], propDecorators: { list: [{
                type: Input
            }] } });

class FormComponentClass extends OnDestroyClass {
    constructor() {
        super(...arguments);
        this.form = new FormGroup({});
        this.formData = undefined;
        this.formLoading = false;
        this.formReset = undefined;
        this.formChange = new EventEmitter();
        this.formSubmit = new EventEmitter();
    }
    mapInputValue(value) {
        return value;
    }
    mapOutputValue(value) {
        return value;
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges && simpleChanges['formData'] && simpleChanges['formData'].firstChange) {
            const valueMapped = this.mapInputValue(simpleChanges['formData'].currentValue);
            this.form.patchValue(valueMapped, { emitEvent: false });
        }
    }
    ngOnInit() {
        this.form.valueChanges
            .pipe(takeUntil$1(this.onDestroy), distinctUntilChanged(), debounceTime(500))
            .subscribe(() => {
            const valueMapped = this.mapOutputValue(this.form.value);
            this.formChange.emit(valueMapped);
        });
        if (this.formReset !== undefined) {
            this.formReset
                .pipe(takeUntil$1(this.onDestroy))
                .subscribe(() => this.form.reset());
        }
    }
    controlErrorMessageIsVisible(control) {
        const controlErrorsIsNotNull = control.errors !== null;
        const controlTouchedIsTrue = control.touched === true;
        const controlDirtyIsTrue = control.dirty === true;
        return controlErrorsIsNotNull && (controlTouchedIsTrue || controlDirtyIsTrue);
    }
    handleNgSubmit() {
        this.form.markAllAsTouched();
        if (this.form.valid === true && this.formLoading === false) {
            this.formLoading = true;
            const valueMapped = this.mapOutputValue(this.form.value);
            this.formSubmit.emit(valueMapped);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormComponentClass, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: FormComponentClass, inputs: { form: "form", formData: "formData", formLoading: "formLoading", formReset: "formReset" }, outputs: { formChange: "formChange", formSubmit: "formSubmit" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormComponentClass, decorators: [{
            type: Directive
        }], propDecorators: { form: [{
                type: Input
            }], formData: [{
                type: Input
            }], formLoading: [{
                type: Input
            }], formReset: [{
                type: Input
            }], formChange: [{
                type: Output
            }], formSubmit: [{
                type: Output
            }] } });

/*
 * Public API Surface of ngx-classes
 */
// classes

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponentClass, ListComponentClass, ListContainerClass, OnDestroyClass, SearchParamType, SearchParamValueType, transform, transformBoolean, transformNumber, transformString };
//# sourceMappingURL=bruno-bombonate-ngx-classes.mjs.map
