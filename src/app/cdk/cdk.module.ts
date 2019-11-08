import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkRoutingModule } from './cdk-routing.module';
import { IndexRouteComponent } from './index-route/index-route.component';
import { A11yComponent } from './a11y/a11y.component';
import { TabDirective } from './a11y/tab.directive';


@NgModule({
  declarations: [
    IndexRouteComponent,
    A11yComponent,
    TabDirective
  ],
  imports: [
    CommonModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
