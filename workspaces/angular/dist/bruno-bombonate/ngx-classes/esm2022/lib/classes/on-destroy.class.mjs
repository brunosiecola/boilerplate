import { Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OnDestroyClass {
    constructor() {
        this.onDestroy = new Subject();
    }
    ngOnDestroy() {
        this.onDestroy.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnDestroyClass, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: OnDestroyClass, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnDestroyClass, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tZGVzdHJveS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtY2xhc3Nlcy9zcmMvbGliL2NsYXNzZXMvb24tZGVzdHJveS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBZ0IsY0FBYztJQURwQztRQUdTLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQU1qRDtJQUpRLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzhHQU5tQixjQUFjO2tHQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRG5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9uRGVzdHJveUNsYXNzIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHVibGljIG9uRGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25EZXN0cm95Lm5leHQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==