import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {
  @Input() cDisabled: boolean;
  constructor(private element: ElementRef) { }

  focus() {
    this.element.nativeElement.focus();
  }
}
