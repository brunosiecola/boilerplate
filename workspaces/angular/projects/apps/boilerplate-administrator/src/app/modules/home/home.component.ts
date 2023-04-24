import { Component } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponentClass } from 'projects/bruno-bombonate/ngx-classes/src/public-api';

class AppValidators {

  static dividedFor5(control: AbstractControl): null | ValidationErrors {
    const controlValue = control.value;
    const controlValueInNumber = +controlValue;
    if (controlValueInNumber % 5 !== 0) {
      return { dividedFor5: true };
    }
    return null;
  }

  static between(valueFirst: number, valueSecond: number): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      const controlValue = control.value;
      const controlValueInNumber = +controlValue;
      if (controlValueInNumber < valueFirst || controlValueInNumber > valueSecond) {
        return {
          between: {
            valueFirst,
            valueSecond
          }
        };
      }
      return null;
    };
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent extends FormComponentClass {

  public override form = new FormGroup({
    name: new FormControl<null | string>(null, [Validators.required, AppValidators.dividedFor5, AppValidators.between(50, 100)])
  });

}
