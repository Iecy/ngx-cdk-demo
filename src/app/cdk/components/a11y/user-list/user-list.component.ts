import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  DOWN_ARROW,
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  TAB,
  UP_ARROW
} from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Component,
  HostBinding,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items)
      .withWrap()
      .withTypeAhead();

    this.keyManager.tabOut.subscribe(res => {
      console.log('this is tab out.', res);
    });

    this.keyManager.change.subscribe(res => {
      console.log('this is key manager change.', res);
    });
  }

  onKeyDown(event) {
    if (!event.target.value) {
      this.keyManager.setActiveItem(null);
    }
    this.keyManager.onKeydown(event);
  }

  public selectItem(index: number): void {
    if (this.users[index].disabled) {
      return;
    }
    this.keyManager.setActiveItem(index);
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER) {
      this.model = this.keyManager.activeItem.item.name;
    }
  }
}
