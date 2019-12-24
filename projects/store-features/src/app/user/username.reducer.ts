import { createReducer, on } from '@ngrx/store';

import { dummyUsername } from './dummy-username';

export const usernameReducer = createReducer(dummyUsername);
