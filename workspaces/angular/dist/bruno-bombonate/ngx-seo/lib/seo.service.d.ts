import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SeoService {
    private readonly title;
    private readonly meta;
    private readonly router;
    private readonly activatedRoute;
    appName: string;
    constructor(title: Title, meta: Meta, router: Router, activatedRoute: ActivatedRoute);
    setTitle(title: string): void;
    setMeta(meta: any): void;
    private listenForRouteChanges;
    init(appName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeoService>;
}
