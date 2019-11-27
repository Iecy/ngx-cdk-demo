import { forwardRef, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VALUE_VALIDATORS } from './utils';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountsComponent),
      multi: true
    },
    VALUE_VALIDATORS
  ]
})
export class CountsComponent implements OnInit, ControlValueAccessor {
  // tslint:disable-next-line:variable-name
  private _counter = 0;
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
}
