import { ControlErrors } from '../../interfaces/control-errors.interface';
import * as i0 from "@angular/core";
export declare class ControlErrorComponent {
    private readonly formsService;
    controlErrors: null | ControlErrors;
    get controlErrorMessage(): undefined | string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlErrorComponent, "control-error", never, { "controlErrors": { "alias": "controlErrors"; "required": false; }; }, {}, never, never, false, never>;
}
