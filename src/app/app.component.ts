import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cdk-demo';
  isCollapsed = false;
  public menuList = []
  constructor() {}

  ngOnInit(): void {
    this.menuList = [
      { title: '无障碍性', subTitle: 'Accessibility', icon: 'api', router: '/cdk/a11y'},
      { title: '文字方向', subTitle: 'Bidirectionality', icon: 'align-left', router: '/cdk/bidi'},
      { title: '拖放', subTitle: 'Drag and Drop', icon: 'drag', router: '/cdk/drag-drop'},
      {title: '布局', subTitle: 'Layout', icon: 'layout', router: '/cdk/layout'},
      {title: '观察者', subTitle: 'Observers', icon: 'thunderbolt', router: '/cdk/observers'},
      {title: '浮层', subTitle: 'Overlay', icon: 'flag', router: '/cdk/overlay'},
      {title: '平台', subTitle: 'Platform', icon: 'appstore', router: '/cdk/platform'},
      {title: '门户', subTitle: 'Portal', icon: 'control', router: '/cdk/portal'},
      {title: '滚动', subTitle: 'Scrolling', icon: 'clock-circle', router: '/cdk/scrolling'},
      { title: '文本字段 ', subTitle: 'text-field', icon: 'file-text', router: '/cdk/text-field'}
    ];
  }
}
