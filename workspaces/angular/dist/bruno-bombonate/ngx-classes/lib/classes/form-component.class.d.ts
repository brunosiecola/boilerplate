import { OnChanges, OnInit, EventEmitter, SimpleChanges } from '@angular/core';
import { DestroyRefClass } from './destroy-ref.class';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class FormComponentClass extends DestroyRefClass implements OnChanges, OnInit {
    form: FormGroup;
    formData: undefined | any;
    formLoading: boolean;
    formReset: undefined | Subject<void>;
    formChange: EventEmitter<any>;
    formBack: EventEmitter<any>;
    formSubmit: EventEmitter<any>;
    protected mapInputValue(value: any): any;
    protected mapOutputValue(value: any): any;
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    controlErrorMessageIsVisible(control: AbstractControl | FormControl): boolean;
    handleNgSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponentClass, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormComponentClass, never, never, { "form": { "alias": "form"; "required": false; }; "formData": { "alias": "formData"; "required": false; }; "formLoading": { "alias": "formLoading"; "required": false; }; "formReset": { "alias": "formReset"; "required": false; }; }, { "formChange": "formChange"; "formBack": "formBack"; "formSubmit": "formSubmit"; }, never, never, false, never>;
}
