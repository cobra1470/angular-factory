import { createReducer, on } from '@ngrx/store';
import { Book } from '../books/book-list/books.model';
import { BooksApiActions } from './books.action';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
)