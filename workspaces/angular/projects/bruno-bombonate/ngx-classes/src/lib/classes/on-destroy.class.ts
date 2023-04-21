import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class OnDestroyClass implements OnDestroy {

  public onDestroy: Subject<void> = new Subject();

  public ngOnDestroy(): void {
    this.onDestroy.next();
  }

}
