import { ModuleWithProviders } from '@angular/core';
import { ControlErrors } from './interfaces/control-errors.interface';
import * as i0 from "@angular/core";
import * as i1 from "./components/control-tip/control-tip.component";
import * as i2 from "./components/control-error/control-error.component";
import * as i3 from "@angular/common";
export declare class FormsModule {
    static forRoot(controlErrorsCustom?: ControlErrors): ModuleWithProviders<FormsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormsModule, [typeof i1.ControlTipComponent, typeof i2.ControlErrorComponent], [typeof i3.CommonModule], [typeof i1.ControlTipComponent, typeof i2.ControlErrorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormsModule>;
}
