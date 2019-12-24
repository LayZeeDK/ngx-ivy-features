import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { todosReducer } from '../todos';
import { State } from './state';
import { usernameReducer } from '../user';

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer,
  username: usernameReducer,
};

export const metaReducers: MetaReducer<State>[] =
  (!environment.production)
  ? []
  : [];
