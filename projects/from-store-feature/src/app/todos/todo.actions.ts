import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add todo',
  props<{ description: string }>());
