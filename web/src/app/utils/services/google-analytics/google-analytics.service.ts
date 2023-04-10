import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(
    @Inject(PLATFORM_ID)
    private readonly platformId: any,
    @Inject(DOCUMENT)
    private readonly document: Document,
    private readonly router: Router
  ) { }

  private listenForRouteChanges(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .subscribe((event: any) => {
          if (event instanceof NavigationEnd) {
            gtag('config', environment.google.analytics.id, {
              'page_path': event.urlAfterRedirects,
            });
          }
      });
    }
  }

  public init(): void {
    if (environment.google.analytics.enabled) {
      try {
        const script1 = this.document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.google.analytics.id}`;
        this.document.head.appendChild(script1);
  
        const script2 = this.document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${environment.google.analytics.id}', { send_page_view: false });
        `;
        this.document.head.appendChild(script2);
        this.listenForRouteChanges();
      } catch (error: any) {
        console.error('Error appending Google Analytics');
        console.error(error);
      }
    }
  }

}
