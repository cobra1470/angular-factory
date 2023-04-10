import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './+state/books.reducer';
import { collectionReducer } from './+state/collection.reducer';
import { AppComponent } from './app.component';
import { BookCollectionComponent } from './books/book-collection/book-collection.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BooksComponent } from './books/books.component';
import { counterReducer } from './my-counter/+state/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [	
    AppComponent,
    MyCounterComponent,
    BooksComponent,
    BookListComponent,
    BookCollectionComponent,
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    RouterModule.forRoot([
      {
        path: 'my-counter',
        component: MyCounterComponent
      },
      {
        path: 'books',
        component: BooksComponent
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
