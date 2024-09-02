import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/forms.service";
export class ControlErrorComponent {
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
    constructor(formsService) {
        this.formsService = formsService;
        this.controlErrors = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlErrorComponent, deps: [{ token: i1.FormsService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ControlErrorComponent, selector: "control-error", inputs: { controlErrors: "controlErrors" }, ngImport: i0, template: "{{ controlErrorMessage }}\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'control-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "{{ controlErrorMessage }}\r\n" }]
        }], ctorParameters: () => [{ type: i1.FormsService }], propDecorators: { controlErrors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LWZvcm1zL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9sLWVycm9yL2NvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC1mb3Jtcy9zcmMvbGliL2NvbXBvbmVudHMvY29udHJvbC1lcnJvci9jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTMUUsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxJQUFXLG1CQUFtQjtRQUM1QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtZQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtnQkFDL0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtvQkFDOUIsTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLGtJQUFrSSxDQUFDLENBQUM7aUJBQ3ZKO2dCQUNELE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFDbUIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFqQnRDLGtCQUFhLEdBQXlCLElBQUksQ0FBQztJQWtCOUMsQ0FBQzs4R0FyQk0scUJBQXFCO2tHQUFyQixxQkFBcUIsaUdDVGxDLCtCQUNBOzsyRkRRYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNO2lGQUt4QyxhQUFhO3NCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybXMuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyb2xFcnJvcnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvbnRyb2wtZXJyb3JzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbnRyb2wtZXJyb3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbEVycm9yQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udHJvbEVycm9yczogbnVsbCB8IENvbnRyb2xFcnJvcnMgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZ2V0IGNvbnRyb2xFcnJvck1lc3NhZ2UoKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuICAgIGNvbnN0IGNvbnRyb2xFcnJvcnMgPSB0aGlzLmNvbnRyb2xFcnJvcnM7XHJcbiAgICBpZiAoY29udHJvbEVycm9ycyAhPT0gbnVsbCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb250cm9sRXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbEVycm9yID0gdGhpcy5mb3Jtc1NlcnZpY2UuY29udHJvbEVycm9yc1trZXldO1xyXG4gICAgICAgIGlmIChjb250cm9sRXJyb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoYCR7a2V5fSBlcnJvciBpcyBub3QgZGVmaW5lZCBhdCBjb250cm9sRXJyb3JzIG9iamVjdC4gSWYgeW91IGFyZSB1c2luZyBhIGN1c3RvbSB2YWxpZGF0b3IgdXNlIEZvcm1zTW9kdWxlLmZvclJvb3QoY29udHJvbEVycm9yc0N1c3RvbSkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250cm9sRXJyb3IoY29udHJvbEVycm9yc1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3Jtc1NlcnZpY2U6IEZvcm1zU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG59XHJcbiIsInt7IGNvbnRyb2xFcnJvck1lc3NhZ2UgfX1cclxuIl19