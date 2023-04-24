import { Directive, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnDestroyClass } from './on-destroy.class';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Directive()
export abstract class FormComponentClass extends OnDestroyClass implements OnChanges, OnInit {

  @Input()
  public form: FormGroup = new FormGroup({ });

  @Input()
  public formData: undefined | any = undefined;

  @Input()
  public formLoading: boolean = false;

  @Input()
  public formReset: undefined | Subject<void> = undefined;

  @Output()
  public formChange: EventEmitter<any> = new EventEmitter();

  @Output()
  public formSubmit: EventEmitter<any> = new EventEmitter();

  protected mapInputValue(value: any): any {
    return value;
  }

  protected mapOutputValue(value: any): any {
    return value;
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges && simpleChanges['formData'] && simpleChanges['formData'].firstChange) {
      const valueMapped = this.mapInputValue(simpleChanges['formData'].currentValue);
      this.form.patchValue(valueMapped, { emitEvent: false });
    }
  }

  public ngOnInit(): void {

    this.form.valueChanges
      .pipe(
        takeUntil(this.onDestroy),
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe(() => {
        const valueMapped = this.mapOutputValue(this.form.value);
        this.formChange.emit(valueMapped);
      });

    if (this.formReset !== undefined) {
      this.formReset
        .pipe(takeUntil(this.onDestroy))
        .subscribe(() => this.form.reset());
    }

  }

  public controlErrorMessageIsVisible(formControl: FormControl): boolean {
    const formControlErrorsIsNotNull = formControl.errors !== null;
    const formControlTouchedIsTrue = formControl.touched === true;
    const formControlDirtyIsTrue = formControl.dirty === true;
    return formControlErrorsIsNotNull && (formControlTouchedIsTrue || formControlDirtyIsTrue);
  }

  public handleNgSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid === true && this.formLoading === false) {
      this.formLoading = true;
      const valueMapped = this.mapOutputValue(this.form.value);
      this.formSubmit.emit(valueMapped);
    }
  }

}
