import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { A11yModule } from '@angular/cdk/a11y';

import { SharedModule } from '@shared/shared.module';
import { CdkInteractivityCheckerComponent } from './components/a11y/cdk-interactivity-checker/cdk-interactivity-checker.component';
import { CdkTrapFocusComponent } from './components/a11y/cdk-trap-focus/cdk-trap-focus.component';

import { FilterPipe } from './filter.pipe';

import { A11yComponent } from './a11y/a11y.component';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkFocusMonitorComponent } from './components/a11y/cdk-focus-monitor/cdk-focus-monitor.component';
import { CdkLiveAnnouncerComponent } from './components/a11y/cdk-live-announcer/cdk-live-announcer.component';
import { TabDirective } from './components/a11y/tabs/tab.directive';
import { IndexRouteComponent } from './index-route/index-route.component';

import { TabsComponent } from './components/a11y/tabs/tabs.component';
import { UserItemComponent } from './components/a11y/user-list/user-item.component';
import { UserListComponent } from './components/a11y/user-list/user-list.component';

@NgModule({
  declarations: [
    IndexRouteComponent,
    A11yComponent,
    TabDirective,

    FilterPipe,

    CdkTrapFocusComponent,
    CdkInteractivityCheckerComponent,
    CdkLiveAnnouncerComponent,
    CdkFocusMonitorComponent,
    UserListComponent,
    UserItemComponent,
    TabsComponent
  ],
  imports: [CommonModule, SharedModule, CdkRoutingModule, A11yModule],
  providers: []
})
export class CdkModule {}
