import { ActionReducerMap, createReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { sampleTodos, Todos } from '../todos';

export interface State {
  readonly todos: Todos;
}

export const reducers: ActionReducerMap<State> = {
  todos: createReducer(sampleTodos),
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
