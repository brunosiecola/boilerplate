import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { DestroyRefClass } from './destroy-ref.class';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FormComponentClass extends DestroyRefClass {
    constructor() {
        super(...arguments);
        this.form = new FormGroup({});
        this.formData = undefined;
        this.formLoading = false;
        this.formReset = undefined;
        this.formChange = new EventEmitter();
        this.formBack = new EventEmitter();
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
            .pipe(takeUntilDestroyed(this.destroyRef), distinctUntilChanged(), debounceTime(500))
            .subscribe(() => {
            const valueMapped = this.mapOutputValue(this.form.value);
            this.formChange.emit(valueMapped);
        });
        if (this.formReset !== undefined) {
            this.formReset
                .pipe(takeUntilDestroyed(this.destroyRef))
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: FormComponentClass, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.7", type: FormComponentClass, inputs: { form: "form", formData: "formData", formLoading: "formLoading", formReset: "formReset" }, outputs: { formChange: "formChange", formBack: "formBack", formSubmit: "formSubmit" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: FormComponentClass, decorators: [{
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
            }], formBack: [{
                type: Output
            }], formSubmit: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb21wb25lbnQuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMvc3JjL2xpYi9jbGFzc2VzL2Zvcm0tY29tcG9uZW50LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3BFLE1BQU0sT0FBZ0Isa0JBQW1CLFNBQVEsZUFBZTtJQURoRTs7UUFJUyxTQUFJLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRyxDQUFDLENBQUM7UUFHckMsYUFBUSxHQUFvQixTQUFTLENBQUM7UUFHdEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHN0IsY0FBUyxHQUE4QixTQUFTLENBQUM7UUFHakQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25ELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FzRDNEO0lBcERXLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVTLGNBQWMsQ0FBQyxLQUFVO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFdBQVcsQ0FBQyxhQUE0QjtRQUM3QyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUTtRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTthQUNuQixJQUFJLENBQ0gsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUNuQyxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUztpQkFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN6QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFFSCxDQUFDO0lBRU0sNEJBQTRCLENBQUMsT0FBc0M7UUFDeEUsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztRQUN2RCxNQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO1FBQ3RELE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFDbEQsT0FBTyxzQkFBc0IsSUFBSSxDQUFDLG9CQUFvQixJQUFJLGtCQUFrQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOzhHQXpFbUIsa0JBQWtCO2tHQUFsQixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBRHZDLFNBQVM7OEJBSUQsSUFBSTtzQkFEVixLQUFLO2dCQUlDLFFBQVE7c0JBRGQsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFNBQVM7c0JBRGYsS0FBSztnQkFJQyxVQUFVO3NCQURoQixNQUFNO2dCQUlBLFFBQVE7c0JBRGQsTUFBTTtnQkFJQSxVQUFVO3NCQURoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlc3Ryb3lSZWZDbGFzcyB9IGZyb20gJy4vZGVzdHJveS1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtQ29tcG9uZW50Q2xhc3MgZXh0ZW5kcyBEZXN0cm95UmVmQ2xhc3MgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoeyB9KTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybURhdGE6IHVuZGVmaW5lZCB8IGFueSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybVJlc2V0OiB1bmRlZmluZWQgfCBTdWJqZWN0PHZvaWQ+ID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZm9ybUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtQmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtU3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIG1hcElucHV0VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbWFwT3V0cHV0VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHNpbXBsZUNoYW5nZXMgJiYgc2ltcGxlQ2hhbmdlc1snZm9ybURhdGEnXSAmJiBzaW1wbGVDaGFuZ2VzWydmb3JtRGF0YSddLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlTWFwcGVkID0gdGhpcy5tYXBJbnB1dFZhbHVlKHNpbXBsZUNoYW5nZXNbJ2Zvcm1EYXRhJ10uY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodmFsdWVNYXBwZWQsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3lSZWYpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZU1hcHBlZCA9IHRoaXMubWFwT3V0cHV0VmFsdWUodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh2YWx1ZU1hcHBlZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmZvcm1SZXNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybVJlc2V0XHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveVJlZikpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcm0ucmVzZXQoKSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnRyb2xFcnJvck1lc3NhZ2VJc1Zpc2libGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2wpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbnRyb2xFcnJvcnNJc05vdE51bGwgPSBjb250cm9sLmVycm9ycyAhPT0gbnVsbDtcclxuICAgIGNvbnN0IGNvbnRyb2xUb3VjaGVkSXNUcnVlID0gY29udHJvbC50b3VjaGVkID09PSB0cnVlO1xyXG4gICAgY29uc3QgY29udHJvbERpcnR5SXNUcnVlID0gY29udHJvbC5kaXJ0eSA9PT0gdHJ1ZTtcclxuICAgIHJldHVybiBjb250cm9sRXJyb3JzSXNOb3ROdWxsICYmIChjb250cm9sVG91Y2hlZElzVHJ1ZSB8fCBjb250cm9sRGlydHlJc1RydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZU5nU3VibWl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgPT09IHRydWUgJiYgdGhpcy5mb3JtTG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5mb3JtTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHZhbHVlTWFwcGVkID0gdGhpcy5tYXBPdXRwdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpO1xyXG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh2YWx1ZU1hcHBlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=