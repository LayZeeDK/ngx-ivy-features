import { createAction, props } from '@ngrx/store';

import { AddTodoEvent } from './add-todo.event';

export const addTodo = createAction(
  '[Todo] Add todo',
  props<AddTodoEvent>());
