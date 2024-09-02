import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import * as i2 from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as i1 from '@angular/platform-browser';

class SeoService {
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

/*
 * Public API Surface of ngx-seo
 */
// services

/**
 * Generated bundle index. Do not edit.
 */

export { SeoService };
//# sourceMappingURL=bruno-bombonate-ngx-seo.mjs.map
