import { Component, AfterViewInit, inject, ElementRef } from '@angular/core';
import { DestroyRefClass } from '@bruno-bombonate/ngx-classes';
import { ToastService } from '../../services/toast.service';
import { Toast } from '../../interfaces/toast.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import gsap from 'gsap';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent extends DestroyRefClass implements AfterViewInit {

  private readonly toastService = inject(ToastService);
  private readonly elementRef = inject(ElementRef);
  
  private toastAnimationInProgress: boolean = false;
  private toastAnimationTimeout: undefined | any = undefined;

  public toastList: Toast[] = [];

  private toastTimelineShow(): void {
    if (this.toastAnimationInProgress === false) {
      this.toastAnimationInProgress = true;
      gsap.to(this.elementRef.nativeElement, {
        duration: 0.35,
        y: '0%',
        onComplete: () => {
          this.toastAnimationInProgress = false;
          if (this.toastList.length === 1) {
            this.toastAnimationTimeout = setTimeout(() => {
              this.toastTimelineHide();
            }, 5000);
          } else {
            this.toastTimelineHide();
          }
        }
      });
    }
  }

  private toastTimelineHide(): void {
    if (this.toastAnimationInProgress === false) {
      this.toastAnimationInProgress = true;
      gsap.to(this.elementRef.nativeElement, {
        clearProps: 'all',
        opacity: 0,
        onComplete: () => {
          this.toastAnimationInProgress = false;
          this.toastList.shift();
          if (this.toastList.length !== 0) {
            this.toastTimelineShow();
          }
        }
      });
    }
  }

  public ngAfterViewInit(): void {
    this.toastService.send$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (toast: Toast) => {
          this.toastList.push(toast);
          if (this.toastList.length === 1) {
            this.toastTimelineShow();
          } else if (this.toastList.length === 2) {
            clearTimeout(this.toastAnimationTimeout);
            this.toastTimelineHide();
          } else {
            this.toastList.splice(1, 1);
          }
        }
      });
  }

}
