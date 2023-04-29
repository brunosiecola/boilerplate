import { Directive, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { OnDestroyClass } from '@bruno-bombonate/ngx-classes';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { fromEvent, takeUntil } from 'rxjs';

@Directive()
export class NavClass extends OnDestroyClass implements AfterViewInit {

  @ViewChild('nav')
  private navElementRef: undefined | ElementRef<HTMLElement> = undefined;
  private navTimeline: any;

  constructor(
    @Inject(PLATFORM_ID)
    protected readonly platformId: any
  ) {
    super();
  }

  protected initNav(): void {
    if (isPlatformBrowser(this.platformId) === true) {
      if (this.navElementRef !== undefined) {
        const navElementRef = this.navElementRef.nativeElement;
        this.navTimeline = gsap.timeline({
          paused: true,
          onReverseComplete: () => {
            gsap.set(navElementRef, { clearProps: 'all' });
            gsap.set(document.body, { clearProps: 'all' });
          }
        })
          .set(document.body, { overflow: 'hidden' })
          .set(navElementRef, { display: 'flex' })
          .to(navElementRef, { duration: 0.5, opacity: 1 });
        fromEvent(window, 'resize')
          .pipe(takeUntil(this.onDestroy))
          .subscribe(() => this.navClose());
      }
    }
  }

  public ngAfterViewInit(): void {
    this.initNav();
  }
  
  public navOpen(): void {
    this.navTimeline.play();
  }

  public navClose(): void {
    this.navTimeline.reverse();
  }

}
