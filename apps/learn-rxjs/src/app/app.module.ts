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
import { ReturnObservableComponent } from './return-observable/return-observable.component';
import { pairwiseComponent } from './pairwise/pairwise.component';
import { RaceComponent } from './race/race.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { CreateComponent } from './create/create.component';
import { EmptyComponent } from './empty/empty.component';

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
    MergeAllComponent,
    ReturnObservableComponent,
    pairwiseComponent,
    RaceComponent,
    StartWithComponent,
    WithLatestFromComponent,
    ZipComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    CreateComponent,
    EmptyComponent
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
      {
        path: 'return-observable',
        component: ReturnObservableComponent
      },
      {
        path: 'pairwise',
        component: pairwiseComponent
      },
      {
        path: 'race',
        component: RaceComponent
      },
      {
        path: 'start-with',
        component: StartWithComponent
      },
      {
        path: 'with-latest-from',
        component: WithLatestFromComponent
      },
      {
        path: 'zip',
        component: ZipComponent
      },
      {
        path: 'default-if-empty',
        component: DefaultIfEmptyComponent
      },
      {
        path: 'every',
        component: EveryComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'empty',
        component: EmptyComponent
      },
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
