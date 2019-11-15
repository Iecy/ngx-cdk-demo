import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [
    FormsModule,
    NgZorroAntdModule,
  ]
})
export class SharedModule { }
