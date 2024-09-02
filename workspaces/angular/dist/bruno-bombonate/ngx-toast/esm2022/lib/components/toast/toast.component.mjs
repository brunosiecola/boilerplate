import { Component } from '@angular/core';
import gsap from 'gsap';
import * as i0 from "@angular/core";
import * as i1 from "../../services/toast.service";
import * as i2 from "@angular/common";
export class ToastComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastComponent, deps: [{ token: i1.ToastService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ToastComponent, selector: "toast", ngImport: i0, template: "<div *ngIf=\"toastList.length !== 0\"\r\n  class=\"toast\"\r\n  [class.toast-error]=\"toastList[0].type === 'error'\"\r\n  [class.toast-success]=\"toastList[0].type === 'success'\">\r\n  {{ toastList[0].message }}\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'toast', template: "<div *ngIf=\"toastList.length !== 0\"\r\n  class=\"toast\"\r\n  [class.toast-error]=\"toastList[0].type === 'error'\"\r\n  [class.toast-success]=\"toastList[0].type === 'success'\">\r\n  {{ toastList[0].message }}\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: i1.ToastService }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC10b2FzdC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC10b2FzdC9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFHckUsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDOzs7O0FBTXhCLE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQ21CLFlBQTBCLEVBQzFCLFVBQXNCO1FBRHRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQbEMsY0FBUyxHQUFZLEVBQUUsQ0FBQztRQUV2Qiw2QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFDMUMsMEJBQXFCLEdBQW9CLFNBQVMsQ0FBQztJQUt2RCxDQUFDO0lBRUcsaUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLHdCQUF3QixLQUFLLEtBQUssRUFBRTtZQUMzQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDLFFBQVEsRUFBRSxJQUFJO2dCQUNkLENBQUMsRUFBRSxJQUFJO2dCQUNQLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFOzRCQUMzQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNWO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUMxQjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLHdCQUF3QixLQUFLLEtBQUssRUFBRTtZQUMzQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPLEVBQUUsQ0FBQztnQkFDVixVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNmLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUMvQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztxQkFDMUI7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO2FBQ3BCLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUMxQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM3QjtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDOzhHQWhFVSxjQUFjO2tHQUFkLGNBQWMsNkNDVDNCLHFPQU1BOzsyRkRHYSxjQUFjO2tCQUoxQixTQUFTOytCQUNFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RvYXN0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0b2FzdExpc3Q6IFRvYXN0W10gPSBbXTtcclxuICBcclxuICBwcml2YXRlIHRvYXN0QW5pbWF0aW9uSW5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdG9hc3RBbmltYXRpb25UaW1lb3V0OiB1bmRlZmluZWQgfCBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkgeyB9XHJcblxyXG4gIHByaXZhdGUgdG9hc3RUaW1lbGluZVNob3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b2FzdEFuaW1hdGlvbkluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMudG9hc3RBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgZ3NhcC50byh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjM1LFxyXG4gICAgICAgIHk6ICcwJScsXHJcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdEFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLnRvYXN0TGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnRvYXN0VGltZWxpbmVIaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdFRpbWVsaW5lSGlkZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvYXN0VGltZWxpbmVIaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9hc3RBbmltYXRpb25JblByb2dyZXNzID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnRvYXN0QW5pbWF0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgIGdzYXAudG8odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgICBjbGVhclByb3BzOiAnYWxsJyxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMudG9hc3RBbmltYXRpb25JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0TGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMudG9hc3RMaXN0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0VGltZWxpbmVTaG93KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvYXN0U2VydmljZS5zZW5kJFxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAodG9hc3Q6IFRvYXN0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0TGlzdC5wdXNoKHRvYXN0KTtcclxuICAgICAgICAgIGlmICh0aGlzLnRvYXN0TGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdFRpbWVsaW5lU2hvdygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0TGlzdC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RBbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdFRpbWVsaW5lSGlkZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdExpc3Quc3BsaWNlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwidG9hc3RMaXN0Lmxlbmd0aCAhPT0gMFwiXHJcbiAgY2xhc3M9XCJ0b2FzdFwiXHJcbiAgW2NsYXNzLnRvYXN0LWVycm9yXT1cInRvYXN0TGlzdFswXS50eXBlID09PSAnZXJyb3InXCJcclxuICBbY2xhc3MudG9hc3Qtc3VjY2Vzc109XCJ0b2FzdExpc3RbMF0udHlwZSA9PT0gJ3N1Y2Nlc3MnXCI+XHJcbiAge3sgdG9hc3RMaXN0WzBdLm1lc3NhZ2UgfX1cclxuPC9kaXY+XHJcbiJdfQ==