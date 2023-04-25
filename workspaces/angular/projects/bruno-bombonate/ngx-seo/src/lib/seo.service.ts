import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  public appName: string = '';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  public setTitle(title: string): void {
    this.title.setTitle(title);
  }

  public setMeta(meta: any): void {
    this.meta.updateTag(meta);
  }

  private listenForRouteChanges(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((activatedRoute: ActivatedRoute) => {
        while (activatedRoute.firstChild) {
          activatedRoute = activatedRoute.firstChild;
        }
        return activatedRoute;
      }),
      filter((activatedRoute: ActivatedRoute) => activatedRoute.outlet === 'primary'),
      mergeMap((activatedRoute: ActivatedRoute) => activatedRoute.data)
    )
      .subscribe((data: undefined | any) => {
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

  public init(appName: string): void {
    this.appName = appName;
    this.listenForRouteChanges();
  }

}
