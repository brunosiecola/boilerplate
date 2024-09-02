import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastType } from '../interfaces/toast.interface';
import * as i0 from "@angular/core";
export class ToastService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtdG9hc3Qvc3JjL2xpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQVMsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBS2pFLE1BQU0sT0FBTyxZQUFZO0lBSHpCO1FBS21CLFVBQUssR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQWtCeEQ7SUFoQkMsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFZLElBQUksQ0FBQyxLQUFZO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxPQUFPLENBQUMsT0FBZTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFlO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzhHQWxCVSxZQUFZO2tIQUFaLFlBQVksY0FGWCxNQUFNOzsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb2FzdCwgVG9hc3RUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90b2FzdC5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VuZDogU3ViamVjdDxUb2FzdD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNlbmQkKCk6IE9ic2VydmFibGU8VG9hc3Q+IHtcclxuICAgIHJldHVybiB0aGlzLl9zZW5kLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQgc2VuZCh0b2FzdDogVG9hc3QpIHtcclxuICAgIHRoaXMuX3NlbmQubmV4dCh0b2FzdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VuZCA9IHsgdHlwZTogVG9hc3RUeXBlLlN1Y2Nlc3MsIG1lc3NhZ2UgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VuZCA9IHsgdHlwZTogVG9hc3RUeXBlLkVycm9yLCBtZXNzYWdlIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=