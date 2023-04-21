import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }

  private setMeta(meta: any): void {
    this.meta.updateTag(meta);
  }

  private listenForRouteChanges(appName: string): void {
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
        let title = appName;
        if (data !== undefined) {
          if (data.title !== undefined) {
            title = `${appName}: ${data.title}`;
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
    this.listenForRouteChanges(appName);
  }

}
