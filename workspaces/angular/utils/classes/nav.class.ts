import { Directive, AfterViewInit, inject, ViewChild, ElementRef, PLATFORM_ID } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive()
export class NavClass extends DestroyRefClass implements AfterViewInit {

  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('nav')
  private navElementRef: undefined | ElementRef<HTMLElement> = undefined;
  private navTimeline: any;

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
          .pipe(takeUntilDestroyed(this.destroyRef))
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
