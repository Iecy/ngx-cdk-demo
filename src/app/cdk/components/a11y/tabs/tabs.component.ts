import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';

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
  }

  setActiveItemKey(idx: number): void {
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
    if (e.code === 'ArrowDown' || e.code === 'ArrowRight') {
      e.preventDefault();
      this.keyManager.setNextItemActive();
    } else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
      e.preventDefault();
      this.keyManager.setPreviousItemActive();
    }
    this.setActiveItemKey(this.keyManager.activeItemIndex);
  }
}
