import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRow } from 'src/app/models/row';
import { RowsState } from './initialState';
import { rowsNode } from './rows.reducer';

export const selectRowsFeature = createFeatureSelector<RowsState>(rowsNode);

export const selectRows = createSelector(
  selectRowsFeature,
  (state: RowsState): IRow[] => state.rows
);

export const selectFilteredRows = createSelector(
  selectRowsFeature,
  (state: RowsState): IRow[] => state.filteredRows
);
