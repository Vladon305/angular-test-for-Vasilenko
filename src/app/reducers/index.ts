import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UsersState } from './users/initialState';
import { usersNode, usersReducer } from './users/users.reducer';

export interface State {
  [usersNode]: UsersState;
}

export const reducers: ActionReducerMap<State, any> = {
  [usersNode]: usersReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
