import {Directive, ElementRef, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {
  @Input() disabled: boolean;
  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled;
  }

  // tslint:disable-next-line:variable-name
  constructor(private element: ElementRef) { }

  focus() {
    this.element.nativeElement.focus();
  }

}
