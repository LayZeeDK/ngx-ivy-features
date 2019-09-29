import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { todosReducer } from '../todos';
import { State } from './state';

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer,
};

export const metaReducers: MetaReducer<State>[] =
  (!environment.production)
  ? []
  : [];
