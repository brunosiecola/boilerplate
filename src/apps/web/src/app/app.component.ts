import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SeoService } from './utils/services/seo/seo.service';
import { GoogleAnalyticsService } from './utils/services/google-analytics/google-analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { WindowService } from './utils/services/window/window.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly seoService: SeoService,
    private readonly googleAnalyticsService: GoogleAnalyticsService,
    @Inject(PLATFORM_ID)
    private readonly platformId: any,
    private readonly router: Router,
    private readonly windowService: WindowService
  ) { }
  
  public ngOnInit(): void {
    this.seoService.init();
    this.googleAnalyticsService.init();
    if (isPlatformBrowser(this.platformId) === true) {
      this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            (this.windowService.window as Window).scrollTo(0, 0);
          }
        });
    }
  }

}
