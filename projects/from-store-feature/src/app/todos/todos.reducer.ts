import { createReducer, on } from '@ngrx/store';

import { sampleTodos } from './sample-todos';
import { addTodo } from './todo.actions';

export const todosReducer = createReducer(
  sampleTodos,
  on(addTodo, (todos, { description }) => [...todos, { description }]));

// export function reducer(state: State | undefined, action: Action) {
//   return todosReducer(state, action);
// }
