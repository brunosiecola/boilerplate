import { Component, ChangeDetectionStrategy, inject, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import * as i0 from "@angular/core";
export class ControlErrorComponent {
    constructor() {
        this.formsService = inject(FormsService);
        this.controlErrors = null;
    }
    get controlErrorMessage() {
        const controlErrors = this.controlErrors;
        if (controlErrors !== null) {
            for (const key in controlErrors) {
                const controlError = this.formsService.controlErrors[key];
                if (controlError === undefined) {
                    throw Error(`${key} error is not defined at controlErrors object. If you are using a custom validator use FormsModule.forRoot(controlErrorsCustom).`);
                }
                return controlError(controlErrors[key]);
            }
        }
        return undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ControlErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.7", type: ControlErrorComponent, selector: "control-error", inputs: { controlErrors: "controlErrors" }, ngImport: i0, template: "{{ controlErrorMessage }}\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ControlErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'control-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "{{ controlErrorMessage }}\r\n" }]
        }], propDecorators: { controlErrors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWZvcm1zL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9sLWVycm9yL2NvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC1mb3Jtcy9zcmMvbGliL2NvbXBvbmVudHMvY29udHJvbC1lcnJvci9jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBUTVELE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFPbUIsaUJBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHOUMsa0JBQWEsR0FBeUIsSUFBSSxDQUFDO0tBZ0JuRDtJQWRDLElBQVcsbUJBQW1CO1FBQzVCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDM0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUMvQixNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsa0lBQWtJLENBQUMsQ0FBQztnQkFDeEosQ0FBQztnQkFDRCxPQUFPLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OEdBbkJVLHFCQUFxQjtrR0FBckIscUJBQXFCLGlHQ1RsQywrQkFDQTs7MkZEUWEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLGVBQWUsbUJBRVIsdUJBQXVCLENBQUMsTUFBTTs4QkFPeEMsYUFBYTtzQkFEbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybXMuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyb2xFcnJvcnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvbnRyb2wtZXJyb3JzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbnRyb2wtZXJyb3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbEVycm9yQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmb3Jtc1NlcnZpY2UgPSBpbmplY3QoRm9ybXNTZXJ2aWNlKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udHJvbEVycm9yczogbnVsbCB8IENvbnRyb2xFcnJvcnMgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZ2V0IGNvbnRyb2xFcnJvck1lc3NhZ2UoKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuICAgIGNvbnN0IGNvbnRyb2xFcnJvcnMgPSB0aGlzLmNvbnRyb2xFcnJvcnM7XHJcbiAgICBpZiAoY29udHJvbEVycm9ycyAhPT0gbnVsbCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb250cm9sRXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbEVycm9yID0gdGhpcy5mb3Jtc1NlcnZpY2UuY29udHJvbEVycm9yc1trZXldO1xyXG4gICAgICAgIGlmIChjb250cm9sRXJyb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoYCR7a2V5fSBlcnJvciBpcyBub3QgZGVmaW5lZCBhdCBjb250cm9sRXJyb3JzIG9iamVjdC4gSWYgeW91IGFyZSB1c2luZyBhIGN1c3RvbSB2YWxpZGF0b3IgdXNlIEZvcm1zTW9kdWxlLmZvclJvb3QoY29udHJvbEVycm9yc0N1c3RvbSkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250cm9sRXJyb3IoY29udHJvbEVycm9yc1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG59XHJcbiIsInt7IGNvbnRyb2xFcnJvck1lc3NhZ2UgfX1cclxuIl19