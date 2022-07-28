import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorFormBuilderComponent } from './profile-editor-form-builder/profile-editor-form-builder.component';
import { FormHttpComponent } from './form-http/form-http.component';
import { HttpClientModule } from '@angular/common/http'
import { WebxSelectLanguageComponent } from './webx-select-language/webx-select-language.component';
import { HeroRouteShellComponent } from './hero-route-shell/hero-route-shell.component';


@NgModule({
  declarations: [		
      AppComponent,
      ProfileEditorComponent,
      ProfileEditorFormBuilderComponent,
      FormHttpComponent,
      WebxSelectLanguageComponent,
      HeroRouteShellComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProfileEditorComponent
      },
      {
        path: 'form-builder',
        component: ProfileEditorFormBuilderComponent
      },
      {
        path: 'form-http',
        component: FormHttpComponent
      },
      {
        path: 'hero-route',
        component: HeroRouteShellComponent
      },
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }