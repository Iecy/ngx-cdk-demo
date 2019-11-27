import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomFormComponent } from './custom-form/custom-form.component';
import { IndexRouterComponent } from './index-router/index-router.component';

const routes: Routes = [
  {
    path: '',
    component: IndexRouterComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'custom-form' },
      { path: 'custom-form', component: CustomFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
