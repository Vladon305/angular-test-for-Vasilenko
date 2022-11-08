import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RowsState } from './rows/initialState';
import { rowsNode, rowsReducer } from './rows/rows.reducer';

export interface State {
  [rowsNode]: RowsState;
}

export const reducers: ActionReducerMap<State, any> = {
  [rowsNode]: rowsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
