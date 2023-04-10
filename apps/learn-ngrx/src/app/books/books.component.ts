import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './books.service';
import { selectBooks, selectBookCollection } from '../+state/books.selector';
import { BooksApiActions } from '../+state/books.action';
import { BooksActions } from '../+state/books.action';

@Component({
  selector: 'factory-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books$ = this.store.select(selectBooks);
  public bookCollection$ = this.store.select(selectBookCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  public onAdd(bookId: string): void {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  public onRemove(bookId: string): void {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(
        (books) => {
          this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
        }
      )
  }
}
