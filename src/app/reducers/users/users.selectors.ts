import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRow } from 'src/app/models/row';
import { UsersState } from './initialState';
import { usersNode } from './users.reducer';

export const selectUsersFeature = createFeatureSelector<UsersState>(usersNode);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState): IRow[] => state.users
);

export const selectFilteredUsers = createSelector(
  selectUsersFeature,
  (state: UsersState): IRow[] => state.filteredUsers
);
