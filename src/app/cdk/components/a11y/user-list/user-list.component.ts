import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, HostListener, HostBinding } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, TAB } from '@angular/cdk/keycodes';

import { UserItemComponent } from './user-item.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  public model = '';
  /**
   * 找到所有的item(ListKeyManagerOption - Highlightable)
   */
  @ViewChildren(UserItemComponent) items: QueryList<UserItemComponent>;
  private keyManager: ActiveDescendantKeyManager<UserItemComponent>;
  users = [
    {
      id: '5b902934d965e7501f4e1c6f',
      name: 'Caroline Hodges'
    },
    {
      id: '5b9029348f7eed8b6f5f02db',
      name: 'Delores Rivas',
      disabled: true
    },
    {
      id: '5b9029346f48c8407c64d0d5',
      name: 'Darlene Franklin'
    },
    {
      id: '5b9029341eff315fa87f9e21',
      name: 'Alfreda Love'
    },
    {
      id: '5b9029342e8917c6ccdb9865',
      name: 'Marcy Ratliff'
    },
    {
      id: '5b9029349dbb48013460e01f',
      name: 'Beulah Nielsen'
    },
    {
      id: '5b902934f4f1586e5e72d74a',
      name: 'Morton Kerr'
    },
    {
      id: '5b9029347918bb204bf7014e',
      name: 'Autumn Tillman'
    },
    {
      id: '5b902934b86f80e1fc60c626',
      name: 'Diane Bennett'
    },
    {
      id: '5b9029348999f59215020349',
      name: 'June Eaton'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items)
      .withWrap()
      .withTypeAhead();
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER) {
      console.log(this.keyManager.activeItem);
      this.model = this.keyManager.activeItem.item.name;
    } else if (
      event.keyCode !== UP_ARROW &&
      event.keyCode !== DOWN_ARROW &&
      event.keyCode !== LEFT_ARROW &&
      event.keyCode !== RIGHT_ARROW &&
      event.keyCode !== TAB
    ) {
      this.keyManager.setActiveItem(null);
      this.keyManager.onKeydown(event);
    }
  }

  public selectItem(index: number): void {
    this.keyManager.setActiveItem(index);
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: KeyboardEvent) {
    if (event.keyCode === UP_ARROW || event.keyCode === RIGHT_ARROW) {
      event.preventDefault();
      this.keyManager.setPreviousItemActive();
    } else if (event.keyCode === DOWN_ARROW || event.keyCode === LEFT_ARROW || event.keyCode === TAB) {
      event.preventDefault();
      this.keyManager.setNextItemActive();
    }
  }
}
