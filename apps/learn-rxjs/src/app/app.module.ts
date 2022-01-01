import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeComponent } from './merge/merge.component';
import { MergeAllComponent } from './merge-all/merge-all.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent,
    CombineLatestComponent,
    ConcatComponent,
    ConcatAllComponent,
    ForkJoinComponent,
    SwitchMapComponent,
    MergeComponent,
    MergeAllComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'combine-all',
        component: CombineAllComponent
      },
      {
        path: 'combine-latest',
        component: CombineLatestComponent
      },
      {
        path: 'concat',
        component: ConcatComponent
      },
      {
        path: 'concat-all',
        component: ConcatAllComponent
      },
      {
        path: 'fork-join',
        component: ForkJoinComponent
      },
      {
        path: 'switch-map',
        component: SwitchMapComponent
      },
      {
        path: 'merge',
        component: MergeComponent
      },
      {
        path: 'merge-all',
        component: MergeAllComponent
      },
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
