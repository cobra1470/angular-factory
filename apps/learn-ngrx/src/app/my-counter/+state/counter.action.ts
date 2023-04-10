import { createAction } from '@ngrx/store';

export const increment = createAction('[counter component] Increment');
export const decrement = createAction('[counter component] Decrement');
export const rest = createAction('[counter component] Rest');