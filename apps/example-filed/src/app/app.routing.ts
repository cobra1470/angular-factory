import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInteractionSplitComponent } from './component-interaction-split/component-interaction-split.component';
import { ComponentInteractionTransferComponent } from './component-interaction-transfer/component-interaction-transfer.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ManageMoreHttpComponent } from './manage-more-http/manage-more-http.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { UseSingleModuleComponent } from './use-single-module/use-single-module.component';

const routes: Routes = [
  {
    path: '',
    component: ManageMoreHttpComponent
  },
  {
    path: 'component-interaction-transfer',
    component: ComponentInteractionTransferComponent
  },
  {
    path: 'component-interaction-split',
    component: ComponentInteractionSplitComponent
  },
  {
    path: 'form-array',
    component: FormArrayComponent
  },
  {
    path: 'use-single-module',
    component: UseSingleModuleComponent
  },
  {
    path: 'ng-on-changes',
    component: NgOnChangesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutes {};
