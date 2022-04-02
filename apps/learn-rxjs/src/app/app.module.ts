import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ConcatComponent } from './concat/concat.component';
import { CreateComponent } from './create/create.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EmptyComponent } from './empty/empty.component';
import { EveryComponent } from './every/every.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromPromiseComponent } from './from-promise/from-promise.component';
import { FromComponent } from './from/from.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { MergeComponent } from './merge/merge.component';
import { OfComponent } from './of/of.component';
import { pairwiseComponent } from './pairwise/pairwise.component';
import { RaceComponent } from './race/race.component';
import { ReturnObservableComponent } from './return-observable/return-observable.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';
import { RangeComponent } from './range/range.component';
import { ThrowComponent } from './throw/throw.component';
import { TimerComponent } from './timer/timer.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryComponent } from './retry/retry.component';

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
    EmptyComponent,
    FromComponent,
    FromEventComponent,
    FromPromiseComponent,
    OfComponent,
    RangeComponent,
    ThrowComponent,
    TimerComponent,
    CatchErrorComponent,
    RetryComponent
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
      {
        path: 'from',
        component: FromComponent
      },
      {
        path: 'from-event',
        component: FromEventComponent
      },
      {
        path: 'from-promise',
        component: FromPromiseComponent
      },
      {
        path: 'of',
        component: OfComponent
      },
      {
        path: 'range',
        component: RangeComponent
      },
      {
        path: 'throw',
        component: ThrowComponent
      },
      {
        path: 'timer',
        component: TimerComponent
      },
      {
        path: 'catch-error',
        component: CatchErrorComponent
      },
      {
        path: 'retry',
        component: RetryComponent
      },
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
