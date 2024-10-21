import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class SeoService {
    constructor() {
        this.title = inject(Title);
        this.meta = inject(Meta);
        this.router = inject(Router);
        this.activatedRoute = inject(ActivatedRoute);
        this.appName = '';
    }
    setTitle(title) {
        this.title.setTitle(title);
    }
    setMeta(meta) {
        this.meta.updateTag(meta);
    }
    listenForRouteChanges() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => this.activatedRoute), map((activatedRoute) => {
            while (activatedRoute.firstChild) {
                activatedRoute = activatedRoute.firstChild;
            }
            return activatedRoute;
        }), filter((activatedRoute) => activatedRoute.outlet === 'primary'), mergeMap((activatedRoute) => activatedRoute.data))
            .subscribe((data) => {
            let title = this.appName;
            if (data !== undefined) {
                if (data.title !== undefined) {
                    title = `${this.appName}: ${data.title}`;
                }
                if (data.meta !== undefined) {
                    if (data.meta.description !== undefined) {
                        this.setMeta({ name: 'description', content: data.meta.description });
                    }
                }
            }
            this.setTitle(title);
        });
    }
    init(appName) {
        this.appName = appName;
        this.listenForRouteChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SeoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SeoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SeoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LXNlby9zcmMvbGliL3Nlby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxVQUFVO0lBSHZCO1FBS21CLFVBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsU0FBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxELFlBQU8sR0FBVyxFQUFFLENBQUM7S0E0QzdCO0lBMUNRLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLEVBQ3RELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQzlCLEdBQUcsQ0FBQyxDQUFDLGNBQThCLEVBQUUsRUFBRTtZQUNyQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDN0MsQ0FBQztZQUNELE9BQU8sY0FBYyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxDQUFDLGNBQThCLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLEVBQy9FLFFBQVEsQ0FBQyxDQUFDLGNBQThCLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FDbEU7YUFDRSxTQUFTLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUM3QixLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ3hFLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7OEdBakRVLFVBQVU7a0hBQVYsVUFBVSxjQUZULE1BQU07OzJGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpdGxlLCBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW9TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSB0aXRsZSA9IGluamVjdChUaXRsZSk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtZXRhID0gaW5qZWN0KE1ldGEpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhY3RpdmF0ZWRSb3V0ZSA9IGluamVjdChBY3RpdmF0ZWRSb3V0ZSk7XHJcblxyXG4gIHB1YmxpYyBhcHBOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGl0bGUuc2V0VGl0bGUodGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE1ldGEobWV0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm1ldGEudXBkYXRlVGFnKG1ldGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JSb3V0ZUNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICBtYXAoKCkgPT4gdGhpcy5hY3RpdmF0ZWRSb3V0ZSksXHJcbiAgICAgIG1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKGFjdGl2YXRlZFJvdXRlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGUuZmlyc3RDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFJvdXRlO1xyXG4gICAgICB9KSxcclxuICAgICAgZmlsdGVyKChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSxcclxuICAgICAgbWVyZ2VNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUuZGF0YSlcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogdW5kZWZpbmVkIHwgYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5hcHBOYW1lO1xyXG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGl0bGUgPSBgJHt0aGlzLmFwcE5hbWV9OiAke2RhdGEudGl0bGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkYXRhLm1ldGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5tZXRhLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldE1ldGEoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBkYXRhLm1ldGEuZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoYXBwTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmFwcE5hbWUgPSBhcHBOYW1lO1xyXG4gICAgdGhpcy5saXN0ZW5Gb3JSb3V0ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==