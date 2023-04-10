import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../books/book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);