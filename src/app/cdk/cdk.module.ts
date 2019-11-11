import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTrapFocusComponent } from './components/a11y/cdk-trap-focus/cdk-trap-focus.component';
import { CdkInteractivityCheckerComponent } from './components/a11y/cdk-interactivity-checker/cdk-interactivity-checker.component';

import { CdkRoutingModule } from './cdk-routing.module';
import { IndexRouteComponent } from './index-route/index-route.component';
import { A11yComponent } from './a11y/a11y.component';
import { TabDirective } from './a11y/tab.directive';
import { CdkLiveAnnouncerComponent } from './components/a11y/cdk-live-announcer/cdk-live-announcer.component';
import { CdkFocusMonitorComponent } from './components/a11y/cdk-focus-monitor/cdk-focus-monitor.component';


@NgModule({
  declarations: [
    IndexRouteComponent,
    A11yComponent,
    TabDirective,

    CdkTrapFocusComponent,
    CdkInteractivityCheckerComponent,
    CdkLiveAnnouncerComponent,
    CdkFocusMonitorComponent
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
  ]
})
export class CdkModule { }
