import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export const validateCounterRange: ValidatorFn = (
  control: AbstractControl
): ValidationErrors => {
  return control.value > 10 || control.value < -10
    ? { rangeError: { current: control.value, max: 10, min: 0 } }
    : null;
};

export function createCounterRangeValidator(max: number, min: number) {
  return (control: AbstractControl): ValidationErrors => {
    return control.value > +max || control.value < +min
      ? { rangeError: { current: control.value, max, min } }
      : null;
  };
}

export const VALUE_VALIDATORS = {
  provide: NG_VALIDATORS,
  useValue: validateCounterRange,
  multi: true
};
