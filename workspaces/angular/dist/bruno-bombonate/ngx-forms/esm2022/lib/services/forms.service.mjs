import { Injectable, Optional, Inject } from '@angular/core';
import { CONTROL_ERRORS } from '../constants/control-errors.constant';
import * as i0 from "@angular/core";
export class FormsService {
    constructor(controlErrorsCustom) {
        this.controlErrors = CONTROL_ERRORS;
        if (controlErrorsCustom !== undefined) {
            this.controlErrors = {
                ...this.controlErrors,
                ...controlErrorsCustom
            };
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsService, deps: [{ token: 'controlErrorsCustom', optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['controlErrorsCustom']
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtZm9ybXMvc3JjL2xpYi9zZXJ2aWNlcy9mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBS3RFLE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBR0UsbUJBQThDO1FBTHpDLGtCQUFhLEdBQWtCLGNBQWMsQ0FBQztRQU9uRCxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHO2dCQUNuQixHQUFJLElBQUksQ0FBQyxhQUFhO2dCQUN0QixHQUFJLG1CQUFtQjthQUN4QixDQUFDO1NBQ0g7SUFDSCxDQUFDOzhHQWZVLFlBQVksa0JBTWIscUJBQXFCO2tIQU5wQixZQUFZLGNBRlgsTUFBTTs7MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sRXJyb3JzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jb250cm9sLWVycm9ycy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDT05UUk9MX0VSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb250cm9sLWVycm9ycy5jb25zdGFudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgY29udHJvbEVycm9yczogQ29udHJvbEVycm9ycyA9IENPTlRST0xfRVJST1JTO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KCdjb250cm9sRXJyb3JzQ3VzdG9tJylcclxuICAgIGNvbnRyb2xFcnJvcnNDdXN0b206IHVuZGVmaW5lZCB8IENvbnRyb2xFcnJvcnNcclxuICApIHtcclxuICAgIGlmIChjb250cm9sRXJyb3JzQ3VzdG9tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jb250cm9sRXJyb3JzID0ge1xyXG4gICAgICAgIC4uLiB0aGlzLmNvbnRyb2xFcnJvcnMsXHJcbiAgICAgICAgLi4uIGNvbnRyb2xFcnJvcnNDdXN0b21cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==