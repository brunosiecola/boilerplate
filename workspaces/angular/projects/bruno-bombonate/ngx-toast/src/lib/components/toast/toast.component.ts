import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Toast } from '../../interfaces/toast.interface';
import { ToastService } from '../../services/toast.service';
import gsap from 'gsap';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements AfterViewInit {

  public toastList: Toast[] = [];
  
  private toastAnimationInProgress: boolean = false;
  private toastAnimationTimeout: undefined | any = undefined;

  constructor(
    private readonly toastService: ToastService,
    private readonly elementRef: ElementRef
  ) { }

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
