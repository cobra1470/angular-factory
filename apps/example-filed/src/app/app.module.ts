import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { ComponentInteractionSplitComponent } from './component-interaction-split/component-interaction-split.component';
import { InteractionSplitDefaultOptionsComponent } from './component-interaction-split/interaction-split-default-options/interaction-split-default-options.component';
import { InteractionSplitSectionAComponent } from './component-interaction-split/interaction-split-section-a/interaction-split-section-a.component';
import { ComponentInteractionTransferComponent } from './component-interaction-transfer/component-interaction-transfer.component';
import { InteractionTransferDefaultOptionsComponent } from './component-interaction-transfer/interaction-transfer-default-options/interaction-transfer-default-options.component';
import { InteractionTransferSectionAComponent } from './component-interaction-transfer/interaction-transfer-section-a/interaction-transfer-section-a.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ManageMoreHttpComponent } from './manage-more-http/manage-more-http.component';
import { UseSingleModuleModule } from './use-single-module/use-single-module.module';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnChangesChildComponent } from './ng-on-changes/ng-on-changes-child/ng-on-changes-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageMoreHttpComponent,
    ComponentInteractionTransferComponent,
    InteractionTransferDefaultOptionsComponent,
    InteractionTransferSectionAComponent,
    ComponentInteractionSplitComponent,
    InteractionSplitDefaultOptionsComponent,
    InteractionSplitSectionAComponent,
    FormArrayComponent,
    NgOnChangesComponent,
    NgOnChangesChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutes,
    UseSingleModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
