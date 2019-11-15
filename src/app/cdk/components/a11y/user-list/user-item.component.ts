import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
// import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Highlightable } from '@angular/cdk/a11y';

@Component({
  selector: 'app-user-item',
  template: `
    <div [class.disabled]="disabled" (click)="onSelectItem(item)">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .active {
    background-color: lightblue;
    color: #fff;
  }

  .disabled {
    opacity: 0.3;
  }
  `]
})
export class UserItemComponent implements Highlightable {
  @Input() item;
  @Input() disabled = false;
  @Output() selectItem = new EventEmitter<any>();
  // tslint:disable-next-line:variable-name
  private _isActive = false;

  constructor() {}

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel() {
    return this.item.name;
  }

  public onSelectItem(item: any): void {
    this.selectItem.emit(item);
  }

}
