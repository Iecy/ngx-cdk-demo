import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexRouteComponent } from './index-route/index-route.component';
import { A11yComponent } from './a11y/a11y.component';

const routes: Routes = [
  {
    path: '',
    component: IndexRouteComponent,
    children: [
      {path: '', redirectTo: 'a11y', pathMatch: 'full'},
      {path: 'a11y', component: A11yComponent },
      {path: 'bidi', component: A11yComponent },
      {path: 'drag-drop', component: A11yComponent },
      {path: 'layout', component: A11yComponent },
      {path: 'observers', component: A11yComponent },
      {path: 'overlay', component: A11yComponent },
      {path: 'platform', component: A11yComponent },
      {path: 'portal', component: A11yComponent },
      {path: 'scrolling', component: A11yComponent },
      {path: 'text-field', component: A11yComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
