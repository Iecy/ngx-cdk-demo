import { Injectable } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private lastRout: string;
  public routerList: any[] = [];
  // tslint:disable-next-line:variable-name
  public _childMenus: any[];
  // public childMenus: any[] =  [];

  constructor() {
    this.routerList = [
      {
        title: 'CKD',
        router: '/cdk',
        children: [
          {
            title: '无障碍性',
            subTitle: 'Accessibility',
            icon: 'api',
            router: '/cdk/a11y'
          },
          {
            title: '文字方向',
            subTitle: 'Bidirectionality',
            icon: 'align-left',
            router: '/cdk/bidi'
          },
          {
            title: '拖放',
            subTitle: 'Drag and Drop',
            icon: 'drag',
            router: '/cdk/drag-drop'
          },
          {
            title: '布局',
            subTitle: 'Layout',
            icon: 'layout',
            router: '/cdk/layout'
          },
          {
            title: '观察者',
            subTitle: 'Observers',
            icon: 'thunderbolt',
            router: '/cdk/observers'
          },
          {
            title: '浮层',
            subTitle: 'Overlay',
            icon: 'flag',
            router: '/cdk/overlay'
          },
          {
            title: '平台',
            subTitle: 'Platform',
            icon: 'appstore',
            router: '/cdk/platform'
          },
          {
            title: '门户',
            subTitle: 'Portal',
            icon: 'control',
            router: '/cdk/portal'
          },
          {
            title: '滚动',
            subTitle: 'Scrolling',
            icon: 'clock-circle',
            router: '/cdk/scrolling'
          },
          {
            title: '文本字段 ',
            subTitle: 'text-field',
            icon: 'file-text',
            router: '/cdk/text-field'
          }
        ]
      },
      {
        title: 'FORM',
        router: '/form',
        children: [
          {
            title: '自定义表单',
            subTitle: 'custom-form',
            icon: 'form',
            router: '/form/custom-form'
          }
        ]
      }
    ];
  }

  public isLinkActive(active: RouterLinkActive, menu: any): boolean {
    const status = active.isActive && menu.router;
    if (status && status !== this.lastRout) {
      setTimeout(() => {
        this.childMenus = menu.children;
      });
      this.lastRout = status;
    }
    return status;
  }

  public get childMenus(): any[] {
    return this._childMenus || [];
  }

  public set childMenus(menus: any[]) {
    this._childMenus = menus;
  }
}
