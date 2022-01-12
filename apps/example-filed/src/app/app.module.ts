import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ManageMoreHttpComponent } from './manage-more-http/manage-more-http.component';
import { ComponentInteractionTransferComponent } from './component-interaction-transfer/component-interaction-transfer.component';
import { InteractionTransferDefaultOptionsComponent } from './component-interaction-transfer/interaction-transfer-default-options/interaction-transfer-default-options.component';
import { InteractionTransferSectionAComponent } from './component-interaction-transfer/interaction-transfer-section-a/interaction-transfer-section-a.component';
import { ComponentInteractionSplitComponent } from './component-interaction-split/component-interaction-split.component';
import { InteractionSplitDefaultOptionsComponent } from './component-interaction-split/interaction-split-default-options/interaction-split-default-options.component';
import { InteractionSplitSectionAComponent } from './component-interaction-split/interaction-split-section-a/interaction-split-section-a.component';
import { FormArrayComponent } from './form-array/form-array.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
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
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
