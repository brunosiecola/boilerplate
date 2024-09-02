import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { OnDestroyClass } from './on-destroy.class';
import { FormGroup } from '@angular/forms';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FormComponentClass extends OnDestroyClass {
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
            .pipe(takeUntil(this.onDestroy), distinctUntilChanged(), debounceTime(500))
            .subscribe(() => {
            const valueMapped = this.mapOutputValue(this.form.value);
            this.formChange.emit(valueMapped);
        });
        if (this.formReset !== undefined) {
            this.formReset
                .pipe(takeUntil(this.onDestroy))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb21wb25lbnQuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMvc3JjL2xpYi9jbGFzc2VzL2Zvcm0tY29tcG9uZW50LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUcvRSxNQUFNLE9BQWdCLGtCQUFtQixTQUFRLGNBQWM7SUFEL0Q7O1FBSVMsU0FBSSxHQUFjLElBQUksU0FBUyxDQUFDLEVBQUcsQ0FBQyxDQUFDO1FBR3JDLGFBQVEsR0FBb0IsU0FBUyxDQUFDO1FBR3RDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzdCLGNBQVMsR0FBOEIsU0FBUyxDQUFDO1FBR2pELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FzRDNEO0lBcERXLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVTLGNBQWMsQ0FBQyxLQUFVO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFdBQVcsQ0FBQyxhQUE0QjtRQUM3QyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUN2RixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFTSxRQUFRO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2FBQ25CLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUN6QixvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVM7aUJBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9CLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFFSCxDQUFDO0lBRU0sNEJBQTRCLENBQUMsT0FBc0M7UUFDeEUsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztRQUN2RCxNQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO1FBQ3RELE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFDbEQsT0FBTyxzQkFBc0IsSUFBSSxDQUFDLG9CQUFvQixJQUFJLGtCQUFrQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7OEdBdEVtQixrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEdkMsU0FBUzs4QkFJRCxJQUFJO3NCQURWLEtBQUs7Z0JBSUMsUUFBUTtzQkFEZCxLQUFLO2dCQUlDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLE1BQU07Z0JBSUEsVUFBVTtzQkFEaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3lDbGFzcyB9IGZyb20gJy4vb24tZGVzdHJveS5jbGFzcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Db21wb25lbnRDbGFzcyBleHRlbmRzIE9uRGVzdHJveUNsYXNzIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgfSk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcm1EYXRhOiB1bmRlZmluZWQgfCBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcm1Mb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcm1SZXNldDogdW5kZWZpbmVkIHwgU3ViamVjdDx2b2lkPiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGZvcm1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZm9ybVN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByb3RlY3RlZCBtYXBJbnB1dFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1hcE91dHB1dFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChzaW1wbGVDaGFuZ2VzICYmIHNpbXBsZUNoYW5nZXNbJ2Zvcm1EYXRhJ10gJiYgc2ltcGxlQ2hhbmdlc1snZm9ybURhdGEnXS5maXJzdENoYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZU1hcHBlZCA9IHRoaXMubWFwSW5wdXRWYWx1ZShzaW1wbGVDaGFuZ2VzWydmb3JtRGF0YSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHZhbHVlTWFwcGVkLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZU1hcHBlZCA9IHRoaXMubWFwT3V0cHV0VmFsdWUodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh2YWx1ZU1hcHBlZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmZvcm1SZXNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybVJlc2V0XHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMub25EZXN0cm95KSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9ybS5yZXNldCgpKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udHJvbEVycm9yTWVzc2FnZUlzVmlzaWJsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBGb3JtQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY29udHJvbEVycm9yc0lzTm90TnVsbCA9IGNvbnRyb2wuZXJyb3JzICE9PSBudWxsO1xyXG4gICAgY29uc3QgY29udHJvbFRvdWNoZWRJc1RydWUgPSBjb250cm9sLnRvdWNoZWQgPT09IHRydWU7XHJcbiAgICBjb25zdCBjb250cm9sRGlydHlJc1RydWUgPSBjb250cm9sLmRpcnR5ID09PSB0cnVlO1xyXG4gICAgcmV0dXJuIGNvbnRyb2xFcnJvcnNJc05vdE51bGwgJiYgKGNvbnRyb2xUb3VjaGVkSXNUcnVlIHx8IGNvbnRyb2xEaXJ0eUlzVHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTmdTdWJtaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCA9PT0gdHJ1ZSAmJiB0aGlzLmZvcm1Mb2FkaW5nID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmZvcm1Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3QgdmFsdWVNYXBwZWQgPSB0aGlzLm1hcE91dHB1dFZhbHVlKHRoaXMuZm9ybS52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHZhbHVlTWFwcGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==