import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RxjsSubjectAComponentComponent } from './rxjs-subject-a-component/rxjs-subject-a-component.component';
import { RxjsSubjectBComponentComponent } from './rxjs-subject-b-component/rxjs-subject-b-component.component';
import { RxjsSubjectCComponentComponent } from './rxjs-subject-c-component/rxjs-subject-c-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    RxjsSubjectAComponentComponent,
    RxjsSubjectCComponentComponent,
    RxjsSubjectBComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
