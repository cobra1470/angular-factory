import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent,
    CombineLatestComponent
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
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
