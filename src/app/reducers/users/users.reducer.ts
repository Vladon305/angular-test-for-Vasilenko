import { initialState } from './initialState';
import { UsersActions, usersActionsEnum } from './users.actions';

export const usersNode = 'users';

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case usersActionsEnum.filterByIncome:
      return {
        ...state,
        filteredUsers: state.users.filter((user) => user.type === 'income'),
      };

    case usersActionsEnum.filterByOutcome:
      return {
        ...state,
        filteredUsers: state.users.filter((user) => user.type === 'outcome'),
      };

    case usersActionsEnum.filterByLoan:
      return {
        ...state,
        filteredUsers: state.users.filter((user) => user.type === 'loan'),
      };

    case usersActionsEnum.filterByInvestment:
      return {
        ...state,
        filteredUsers: state.users.filter((user) => user.type === 'investment'),
      };

    default:
      return state;
  }
};
