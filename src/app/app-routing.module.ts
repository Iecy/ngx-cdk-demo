import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cdk', pathMatch: 'full' },
  { path: 'cdk', loadChildren: './cdk/cdk.module#CdkModule' },
  { path: 'form', loadChildren: './form/form.module#FormModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
