import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/router";
export class SeoService {
    constructor(title, meta, router, activatedRoute) {
        this.title = title;
        this.meta = meta;
        this.router = router;
        this.activatedRoute = activatedRoute;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SeoService, deps: [{ token: i1.Title }, { token: i1.Meta }, { token: i2.Router }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SeoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SeoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.Title }, { type: i1.Meta }, { type: i2.Router }, { type: i2.ActivatedRoute }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icnVuby1ib21ib25hdGUvbmd4LXNlby9zcmMvbGliL3Nlby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUEwQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt2RCxNQUFNLE9BQU8sVUFBVTtJQUlyQixZQUNtQixLQUFZLEVBQ1osSUFBVSxFQUNWLE1BQWMsRUFDZCxjQUE4QjtRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOMUMsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQU94QixDQUFDO0lBRUUsUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixNQUFNLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsRUFDdEQsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFDOUIsR0FBRyxDQUFDLENBQUMsY0FBOEIsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sY0FBYyxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDNUM7WUFDRCxPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxjQUE4QixFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxFQUMvRSxRQUFRLENBQUMsQ0FBQyxjQUE4QixFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQ2xFO2FBQ0UsU0FBUyxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFO1lBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUM1QixLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDMUM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7cUJBQ3ZFO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7OEdBbkRVLFVBQVU7a0hBQVYsVUFBVSxjQUZULE1BQU07OzJGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaXRsZSwgTWV0YSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBhcHBOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpdGxlOiBUaXRsZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWV0YTogTWV0YSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKHRpdGxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRNZXRhKG1ldGE6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhtZXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuRm9yUm91dGVDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgbWFwKCgpID0+IHRoaXMuYWN0aXZhdGVkUm91dGUpLFxyXG4gICAgICBtYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4ge1xyXG4gICAgICAgIHdoaWxlIChhY3RpdmF0ZWRSb3V0ZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBhY3RpdmF0ZWRSb3V0ZSA9IGFjdGl2YXRlZFJvdXRlLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZTtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbHRlcigoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5JyksXHJcbiAgICAgIG1lcmdlTWFwKChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLmRhdGEpXHJcbiAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHVuZGVmaW5lZCB8IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuYXBwTmFtZTtcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYCR7dGhpcy5hcHBOYW1lfTogJHtkYXRhLnRpdGxlfWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEubWV0YS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRNZXRhKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogZGF0YS5tZXRhLmRlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KGFwcE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5hcHBOYW1lID0gYXBwTmFtZTtcclxuICAgIHRoaXMubGlzdGVuRm9yUm91dGVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=