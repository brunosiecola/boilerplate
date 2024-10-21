import { AfterViewInit } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { Toast } from '../../interfaces/toast.interface';
import * as i0 from "@angular/core";
export declare class ToastComponent extends DestroyRefClass implements AfterViewInit {
    private readonly toastService;
    private readonly elementRef;
    private toastAnimationInProgress;
    private toastAnimationTimeout;
    toastList: Toast[];
    private toastTimelineShow;
    private toastTimelineHide;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "toast", never, {}, {}, never, never, false, never>;
}
