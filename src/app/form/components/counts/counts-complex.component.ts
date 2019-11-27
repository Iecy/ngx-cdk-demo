import {
  forwardRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';

import { createCounterRangeValidator } from './utils';

@Component({
  selector: 'app-counts-complex',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountsComplexComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CountsComplexComponent),
      multi: true
    }
  ]
})
export class CountsComplexComponent
  implements OnInit, ControlValueAccessor, Validator, OnChanges {
  // tslint:disable-next-line:variable-name
  private _counter = 0;
  // tslint:disable-next-line:variable-name
  private _validator: ValidatorFn;
  // tslint:disable-next-line:variable-name
  private _onChange: () => void;

  @Input() set count(value: number) {
    this._counter = value;
  }

  get count(): number {
    return this._counter;
  }
  @Input() max: number;
  @Input() min: number;
  constructor() {}

  private onChange: (value: any) => void;
  private onTouched: () => void;

  ngOnInit() {}
  // 监听输入属性变化，调用内部的_createValidator()方法，创建RangeValidator
  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes || 'min' in changes) {
      this._createValidator();
    }
  }

  writeValue(value: any) {
    if (value !== undefined && value !== null) {
      this.count = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  increment() {
    this.count++;
    this.onChange(this.count);
    this.onTouched();
  }

  decrement() {
    this.count--;
    this.onChange(this.count);
    this.onTouched();
  }

  // 动态创建RangeValidator
  private _createValidator(): void {
    this._validator = createCounterRangeValidator(this.max, this.min);
  }
  // 执行控件验证
  validate(c: AbstractControl): ValidationErrors {
    return this.min === null || this.max === null ? null : this._validator(c);
  }
}
