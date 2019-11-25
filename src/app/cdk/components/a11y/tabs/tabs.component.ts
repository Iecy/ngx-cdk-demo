import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';

import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ViewChildren(TabDirective) tabDirectiveList: QueryList<TabDirective>;
  public keyManager: FocusKeyManager<TabDirective>;

  public activeKey = 0;
  /** 数据，缺少ID, 使用ListKeyManagerOption中的数据是需要ID的唯一标示。实例：user-list */
  public tabList = [
    { title: '无障碍性', value: '无障碍性' },
    { title: '文字方向', value: '文字方向' },
    { title: '拖放', value: '拖放', disabled: true },
    { title: '布局', value: '布局' },
    { title: '观察者', value: '观察者' },
    { title: '浮层', value: '浮层' }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.keyManager = new FocusKeyManager(this.tabDirectiveList)
      .withVerticalOrientation(false)
      .withHorizontalOrientation('rtl')
      .withWrap();
    this.keyManager.setActiveItem(0);

    this.keyManager.tabOut.subscribe(res => {
      console.log(res, 'this is tab out.');
    });

    this.keyManager.change.subscribe(index => {
      console.log(index, 'this is active index change.');
    });
  }
  /** 手动控制active key */
  setActiveItemKey(idx: number): void {
    if (this.tabList[idx].disabled) {
      return;
    }
    this.activeKey = idx;
  }

  // getNextActive(direction = 'forward') {
  //   const tabListArray = this.tabDirectiveList.toArray();
  //   let nextKey: number;
  //   if (direction === 'forward') {
  //     this.keyManager.setNextItemActive();
  //     nextKey = this.keyManager.activeItemIndex;
  //     if (tabListArray[nextKey].disabled) {
  //       this.getNextActive('forward');
  //       return;
  //     }
  //   }
  //   if (direction === 'backward') {
  //     this.keyManager.setPreviousItemActive();
  //     nextKey = this.keyManager.activeItemIndex;
  //     if (tabListArray[nextKey].disabled) {
  //       this.getNextActive('backward');
  //       return;
  //     }
  //   }
  //   this.setActiveItemKey(nextKey);
  // }

  @HostListener('keydown', ['$event'])
  public keydown(e: KeyboardEvent) {
    e.preventDefault();
    this.keyManager.onKeydown(e);
    this.setActiveItemKey(this.keyManager.activeItemIndex);
  }
}
