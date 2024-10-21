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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: FormsService, deps: [{ token: 'controlErrorsCustom', optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: FormsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: FormsService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtZm9ybXMvc3JjL2xpYi9zZXJ2aWNlcy9mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBS3RFLE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBR0UsbUJBQThDO1FBTHpDLGtCQUFhLEdBQWtCLGNBQWMsQ0FBQztRQU9uRCxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ25CLEdBQUksSUFBSSxDQUFDLGFBQWE7Z0JBQ3RCLEdBQUksbUJBQW1CO2FBQ3hCLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQzs4R0FmVSxZQUFZLGtCQU1iLHFCQUFxQjtrSEFOcEIsWUFBWSxjQUZYLE1BQU07OzJGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFNSSxRQUFROzswQkFDUixNQUFNOzJCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbEVycm9ycyB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29udHJvbC1lcnJvcnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ09OVFJPTF9FUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMvY29udHJvbC1lcnJvcnMuY29uc3RhbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybXNTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGNvbnRyb2xFcnJvcnM6IENvbnRyb2xFcnJvcnMgPSBDT05UUk9MX0VSUk9SUztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdCgnY29udHJvbEVycm9yc0N1c3RvbScpXHJcbiAgICBjb250cm9sRXJyb3JzQ3VzdG9tOiB1bmRlZmluZWQgfCBDb250cm9sRXJyb3JzXHJcbiAgKSB7XHJcbiAgICBpZiAoY29udHJvbEVycm9yc0N1c3RvbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbEVycm9ycyA9IHtcclxuICAgICAgICAuLi4gdGhpcy5jb250cm9sRXJyb3JzLFxyXG4gICAgICAgIC4uLiBjb250cm9sRXJyb3JzQ3VzdG9tXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=