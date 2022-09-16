import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import { UsersState } from './initialState';
import { usersNode } from './users.reducer';

export const selectUsersFeature = createFeatureSelector<UsersState>(usersNode);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState): IUser[] => state.users
);

export const selectFilteredUsers = createSelector(
  selectUsersFeature,
  (state: UsersState): IUser[] => state.filteredUsers
);
