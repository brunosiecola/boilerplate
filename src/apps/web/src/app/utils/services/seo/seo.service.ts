import { Injectable, } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private siteName = 'Boilerplate';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }

  private setMetaDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
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
        let title = this.siteName;
        if (data !== undefined) {
          if (data.title) {
            title = `${this.siteName}: ${data.title}`;
          }
          if (data.description) {
            this.setMetaDescription(data.description);
          }
        }
        this.setTitle(title);
      });
  }

  public init(): void {
    this.listenForRouteChanges();
  }

}
