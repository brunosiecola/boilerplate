import * as i0 from '@angular/core';
import { Injectable, inject, ElementRef, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import gsap from 'gsap';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ToastComponent extends DestroyRefClass {
    constructor() {
        super(...arguments);
        this.toastService = inject(ToastService);
        this.elementRef = inject(ElementRef);
        this.toastAnimationInProgress = false;
        this.toastAnimationTimeout = undefined;
        this.toastList = [];
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
            .pipe(takeUntilDestroyed(this.destroyRef))
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: ToastComponent, selector: "toast", usesInheritance: true, ngImport: i0, template: "@if (toastList.length !== 0) {\r\n  <div\r\n    class=\"toast\"\r\n    [class.toast-error]=\"toastList[0].type === 'error'\"\r\n    [class.toast-success]=\"toastList[0].type === 'success'\">\r\n    {{ toastList[0].message }}\r\n  </div>\r\n}\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'toast', template: "@if (toastList.length !== 0) {\r\n  <div\r\n    class=\"toast\"\r\n    [class.toast-error]=\"toastList[0].type === 'error'\"\r\n    [class.toast-success]=\"toastList[0].type === 'success'\">\r\n    {{ toastList[0].message }}\r\n  </div>\r\n}\r\n" }]
        }] });

class ToastModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.7", ngImport: i0, type: ToastModule, declarations: [
            // components
            ToastComponent], imports: [CommonModule], exports: [
            // components
            ToastComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ToastModule, decorators: [{
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
