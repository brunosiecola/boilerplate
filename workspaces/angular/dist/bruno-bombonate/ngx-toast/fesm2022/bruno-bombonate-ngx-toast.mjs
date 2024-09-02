import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { Subject } from 'rxjs';

var ToastType;
(function (ToastType) {
    ToastType["Success"] = "success";
    ToastType["Error"] = "error";
})(ToastType || (ToastType = {}));

class ToastService {
    constructor() {
        this._send = new Subject();
    }
    get send$() {
        return this._send.asObservable();
    }
    set send(toast) {
        this._send.next(toast);
    }
    success(message) {
        this.send = { type: ToastType.Success, message };
    }
    error(message) {
        this.send = { type: ToastType.Error, message };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ToastComponent {
    constructor(toastService, elementRef) {
        this.toastService = toastService;
        this.elementRef = elementRef;
        this.toastList = [];
        this.toastAnimationInProgress = false;
        this.toastAnimationTimeout = undefined;
    }
    toastTimelineShow() {
        if (this.toastAnimationInProgress === false) {
            this.toastAnimationInProgress = true;
            gsap.to(this.elementRef.nativeElement, {
                duration: 0.35,
                y: '0%',
                onComplete: () => {
                    this.toastAnimationInProgress = false;
                    if (this.toastList.length === 1) {
                        this.toastAnimationTimeout = setTimeout(() => {
                            this.toastTimelineHide();
                        }, 5000);
                    }
                    else {
                        this.toastTimelineHide();
                    }
                }
            });
        }
    }
    toastTimelineHide() {
        if (this.toastAnimationInProgress === false) {
            this.toastAnimationInProgress = true;
            gsap.to(this.elementRef.nativeElement, {
                clearProps: 'all',
                opacity: 0,
                onComplete: () => {
                    this.toastAnimationInProgress = false;
                    this.toastList.shift();
                    if (this.toastList.length !== 0) {
                        this.toastTimelineShow();
                    }
                }
            });
        }
    }
    ngAfterViewInit() {
        this.toastService.send$
            .subscribe({
            next: (toast) => {
                this.toastList.push(toast);
                if (this.toastList.length === 1) {
                    this.toastTimelineShow();
                }
                else if (this.toastList.length === 2) {
                    clearTimeout(this.toastAnimationTimeout);
                    this.toastTimelineHide();
                }
                else {
                    this.toastList.splice(1, 1);
                }
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastComponent, deps: [{ token: ToastService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ToastComponent, selector: "toast", ngImport: i0, template: "<div *ngIf=\"toastList.length !== 0\"\r\n  class=\"toast\"\r\n  [class.toast-error]=\"toastList[0].type === 'error'\"\r\n  [class.toast-success]=\"toastList[0].type === 'success'\">\r\n  {{ toastList[0].message }}\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'toast', template: "<div *ngIf=\"toastList.length !== 0\"\r\n  class=\"toast\"\r\n  [class.toast-error]=\"toastList[0].type === 'error'\"\r\n  [class.toast-success]=\"toastList[0].type === 'success'\">\r\n  {{ toastList[0].message }}\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: ToastService }, { type: i0.ElementRef }] });

class ToastModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: ToastModule, declarations: [
            // components
            ToastComponent], imports: [CommonModule], exports: [
            // components
            ToastComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        // components
                        ToastComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        // components
                        ToastComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-toast
 */
// modules

/**
 * Generated bundle index. Do not edit.
 */

export { ToastComponent, ToastModule, ToastService, ToastType };
//# sourceMappingURL=bruno-bombonate-ngx-toast.mjs.map
