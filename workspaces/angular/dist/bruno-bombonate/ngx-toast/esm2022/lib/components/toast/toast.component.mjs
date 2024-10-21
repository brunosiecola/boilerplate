import { Component, inject, ElementRef } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { ToastService } from '../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import gsap from 'gsap';
import * as i0 from "@angular/core";
export class ToastComponent extends DestroyRefClass {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC10b2FzdC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC10b2FzdC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQzs7QUFNeEIsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlO0lBSm5EOztRQU1tQixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxlQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLDZCQUF3QixHQUFZLEtBQUssQ0FBQztRQUMxQywwQkFBcUIsR0FBb0IsU0FBUyxDQUFDO1FBRXBELGNBQVMsR0FBWSxFQUFFLENBQUM7S0F5RGhDO0lBdkRTLGlCQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDLFFBQVEsRUFBRSxJQUFJO2dCQUNkLENBQUMsRUFBRSxJQUFJO2dCQUNQLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7NEJBQzNDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ1gsQ0FBQzt5QkFBTSxDQUFDO3dCQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUMzQixDQUFDO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPLEVBQUUsQ0FBQztnQkFDVixVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUMzQixDQUFDO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO2FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekMsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztxQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUN2QyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQixDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7OEdBL0RVLGNBQWM7a0dBQWQsY0FBYyxvRUNYM0IsdVBBUUE7OzJGREdhLGNBQWM7a0JBSjFCLFNBQVM7K0JBQ0UsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgaW5qZWN0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlc3Ryb3lSZWZDbGFzcyB9IGZyb20gJ0BicnVuby1ib21ib25hdGUvbmd4LWNsYXNzZXMnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RvYXN0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBleHRlbmRzIERlc3Ryb3lSZWZDbGFzcyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0U2VydmljZSA9IGluamVjdChUb2FzdFNlcnZpY2UpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcclxuICBcclxuICBwcml2YXRlIHRvYXN0QW5pbWF0aW9uSW5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdG9hc3RBbmltYXRpb25UaW1lb3V0OiB1bmRlZmluZWQgfCBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyB0b2FzdExpc3Q6IFRvYXN0W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSB0b2FzdFRpbWVsaW5lU2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvYXN0QW5pbWF0aW9uSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy50b2FzdEFuaW1hdGlvbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICBnc2FwLnRvKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDAuMzUsXHJcbiAgICAgICAgeTogJzAlJyxcclxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0QW5pbWF0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMudG9hc3RMaXN0Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0QW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMudG9hc3RUaW1lbGluZUhpZGUoKTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0VGltZWxpbmVIaWRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9hc3RUaW1lbGluZUhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b2FzdEFuaW1hdGlvbkluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMudG9hc3RBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgZ3NhcC50byh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICAgIGNsZWFyUHJvcHM6ICdhbGwnLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdEFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudG9hc3RMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICBpZiAodGhpcy50b2FzdExpc3QubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3RUaW1lbGluZVNob3coKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RTZXJ2aWNlLnNlbmQkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3lSZWYpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAodG9hc3Q6IFRvYXN0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0TGlzdC5wdXNoKHRvYXN0KTtcclxuICAgICAgICAgIGlmICh0aGlzLnRvYXN0TGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdFRpbWVsaW5lU2hvdygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0TGlzdC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RBbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdFRpbWVsaW5lSGlkZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdExpc3Quc3BsaWNlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJAaWYgKHRvYXN0TGlzdC5sZW5ndGggIT09IDApIHtcclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInRvYXN0XCJcclxuICAgIFtjbGFzcy50b2FzdC1lcnJvcl09XCJ0b2FzdExpc3RbMF0udHlwZSA9PT0gJ2Vycm9yJ1wiXHJcbiAgICBbY2xhc3MudG9hc3Qtc3VjY2Vzc109XCJ0b2FzdExpc3RbMF0udHlwZSA9PT0gJ3N1Y2Nlc3MnXCI+XHJcbiAgICB7eyB0b2FzdExpc3RbMF0ubWVzc2FnZSB9fVxyXG4gIDwvZGl2PlxyXG59XHJcbiJdfQ==