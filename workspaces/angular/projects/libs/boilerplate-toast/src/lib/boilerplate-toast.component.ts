import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { BoilerplateToast } from './boilerplate-toast.interface';
import { BoilerplateToastService } from './boilerplate-toast.service';
import gsap from 'gsap';

@Component({
  selector: 'boilerplate-toast',
  templateUrl: './boilerplate-toast.component.html',
  styleUrls: ['./boilerplate-toast.component.sass']
})
export class BoilerplateToastComponent implements AfterViewInit {

  public boilerplateToastList: BoilerplateToast[] = [];
  
  private boilerplateToastAnimationInProgress: boolean = false;
  private boilerplateToastAnimationTimeout: undefined | any = undefined;

  constructor(
    private readonly boilerplateToastService: BoilerplateToastService,
    private readonly elementRef: ElementRef
  ) { }

  private boilerplateToastTimelineShow(): void {
    if (this.boilerplateToastAnimationInProgress === false) {
      this.boilerplateToastAnimationInProgress = true;
      gsap.to(this.elementRef.nativeElement, {
        duration: 0.25,
        y: '0%',
        onComplete: () => {
          this.boilerplateToastAnimationInProgress = false;
          if (this.boilerplateToastList.length === 1) {
            this.boilerplateToastAnimationTimeout = setTimeout(() => {
              this.boilerplateToastTimelineHide();
            }, 5000);
          } else {
            this.boilerplateToastTimelineHide();
          }
        }
      });
    }
  }

  private boilerplateToastTimelineHide(): void {
    if (this.boilerplateToastAnimationInProgress === false) {
      this.boilerplateToastAnimationInProgress = true;
      gsap.to(this.elementRef.nativeElement, {
        clearProps: 'all',
        opacity: 0,
        onComplete: () => {
          this.boilerplateToastAnimationInProgress = false;
          this.boilerplateToastList.shift();
          if (this.boilerplateToastList.length !== 0) {
            this.boilerplateToastTimelineShow();
          }
        }
      });
    }
  }

  public ngAfterViewInit(): void {
    this.boilerplateToastService.send$
      .subscribe({
        next: (boilerplateToast: any) => {
          this.boilerplateToastList.push(boilerplateToast);
          if (this.boilerplateToastList.length === 1) {
            this.boilerplateToastTimelineShow();
          } else if (this.boilerplateToastList.length === 2) {
            clearTimeout(this.boilerplateToastAnimationTimeout);
            this.boilerplateToastTimelineHide();
          } else {
            this.boilerplateToastList.splice(1, 1);
          }
        }
      });
  }

}
