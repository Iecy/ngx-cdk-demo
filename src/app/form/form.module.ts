import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { FormRoutingModule } from './form-routing.module';

import { CountsComplexComponent } from './components/counts/counts-complex.component';
import { CountsComponent } from './components/counts/counts-simple.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { IndexRouterComponent } from './index-router/index-router.component';

@NgModule({
  declarations: [
    IndexRouterComponent,
    CustomFormComponent,
    CountsComponent,
    CountsComplexComponent
  ],
  imports: [CommonModule, SharedModule, FormRoutingModule]
})
export class FormModule {}
