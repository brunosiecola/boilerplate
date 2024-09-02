import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class OnDestroyClass implements OnDestroy {
    onDestroy: Subject<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnDestroyClass, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OnDestroyClass, never, never, {}, {}, never, never, false, never>;
}
