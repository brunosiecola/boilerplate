import { AfterViewInit, ElementRef } from '@angular/core';
import { Toast } from '../../interfaces/toast.interface';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
export declare class ToastComponent implements AfterViewInit {
    private readonly toastService;
    private readonly elementRef;
    toastList: Toast[];
    private toastAnimationInProgress;
    private toastAnimationTimeout;
    constructor(toastService: ToastService, elementRef: ElementRef);
    private toastTimelineShow;
    private toastTimelineHide;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "toast", never, {}, {}, never, never, false, never>;
}
