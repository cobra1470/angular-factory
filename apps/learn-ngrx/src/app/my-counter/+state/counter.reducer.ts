import { createReducer, on } from '@ngrx/store';
import { decrement, increment, rest } from './counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: number) => state + 1),
  on(decrement, (state: number) => state - 1),
  on(rest, () => 0),
)
