import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Injectable, Optional, Inject, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ControlTipComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlTipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ControlTipComponent, selector: "control-tip", ngImport: i0, template: "<ng-content>\r\n</ng-content>\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlTipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'control-tip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content>\r\n</ng-content>\r\n" }]
        }] });

const CONTROL_ERRORS = {
    required: () => 'Please fill this field.',
    requiredTrue: () => 'Please fill this field.',
    email: () => 'Please fill the email in the format: yourname@example.com.',
    pattern: () => 'Please fill this field in the correct format.',
    min: (error) => `Please enter a value of at least ${error.min}.`,
    max: (error) => `Please enter a maximum value of ${error.max}.`,
    minlength: (error) => `Please enter at least ${error.requiredLength} characters.`,
    maxlength: (error) => `Please enter a maximum of ${error.requiredLength} characters.`
};

class FormsService {
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

class ControlErrorComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlErrorComponent, deps: [{ token: FormsService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ControlErrorComponent, selector: "control-error", inputs: { controlErrors: "controlErrors" }, ngImport: i0, template: "{{ controlErrorMessage }}\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ControlErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'control-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "{{ controlErrorMessage }}\r\n" }]
        }], ctorParameters: () => [{ type: FormsService }], propDecorators: { controlErrors: [{
                type: Input
            }] } });

class FormsModule {
    static forRoot(controlErrorsCustom) {
        return {
            ngModule: FormsModule,
            providers: [
                { provide: 'controlErrorsCustom', useValue: controlErrorsCustom }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, declarations: [
            // components
            ControlTipComponent,
            ControlErrorComponent], imports: [CommonModule], exports: [
            // components
            ControlTipComponent,
            ControlErrorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        // components
                        ControlTipComponent,
                        ControlErrorComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        // components
                        ControlTipComponent,
                        ControlErrorComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-forms
 */
// modules

/**
 * Generated bundle index. Do not edit.
 */

export { CONTROL_ERRORS, ControlErrorComponent, ControlTipComponent, FormsModule, FormsService };
//# sourceMappingURL=bruno-bombonate-ngx-forms.mjs.map
