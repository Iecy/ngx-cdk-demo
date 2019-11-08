import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';

import { TabDirective } from './tab.directive';
@Component({
  selector: 'app-a11y',
  templateUrl: './a11y.component.html',
  styleUrls: ['./a11y.component.scss']
})
export class A11yComponent implements OnInit, AfterViewInit {
  @ViewChildren(TabDirective) tabDirectiveList: QueryList<TabDirective>;
  public keyManager: FocusKeyManager<TabDirective>;
  public activeKey = 0;
  public tabList = [
    { title: '无障碍性', value: '无障碍性' },
    { title: '文字方向', value: '文字方向' },
    { title: '拖放', value: '拖放', disabled: true },
    { title: '布局', value: '布局' },
    { title: '观察者', value: '观察者' },
    { title: '浮层', value: '浮层' },
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.keyManager = new FocusKeyManager(this.tabDirectiveList).withWrap();
    // this.keyManager.setActiveItem(this.activeKey);
  }

  setActiveItemKey(idx: number): void {
    const item = this.tabDirectiveList.toArray()[idx];
    if (!item.cDisabled) {
      this.keyManager.setActiveItem(idx);
      this.activeKey = idx;
    }
  }

  getNextActive(direction = 'forward') {
    const tabListArray = this.tabDirectiveList.toArray();
    let nextKey: number;
    if (direction === 'forward') {
      this.keyManager.setNextItemActive();
      nextKey = this.keyManager.activeItemIndex;
      if (tabListArray[nextKey].cDisabled) {
        this.getNextActive('forward');
        return;
      }
    }
    if (direction === 'backward') {
      this.keyManager.setPreviousItemActive();
      nextKey = this.keyManager.activeItemIndex;
      if (tabListArray[nextKey].cDisabled) {
        this.getNextActive('backward');
        return;
      }
    }
    this.setActiveItemKey(nextKey);
  }

  @HostListener('keydown', ['$event'])
  public keydown(e: KeyboardEvent) {
    if (e.code === 'ArrowDown' || e.code === 'ArrowRight') {
      this.getNextActive('forward');
    } else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
      this.getNextActive('backward');
    }
  }

}
