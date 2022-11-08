import { initialState } from './initialState';
import { rowsActions, rowsActionsEnum } from './rows.actions';

export const rowsNode = 'rows';

export const rowsReducer = (state = initialState, action: rowsActions) => {
  switch (action.type) {
    case rowsActionsEnum.filterByIncome:
      return {
        ...state,
        filteredRows: state.rows.filter((row) => row.type === 'income'),
      };

    case rowsActionsEnum.filterByOutcome:
      return {
        ...state,
        filteredRows: state.rows.filter((row) => row.type === 'outcome'),
      };

    case rowsActionsEnum.filterByLoan:
      return {
        ...state,
        filteredRows: state.rows.filter((row) => row.type === 'loan'),
      };

    case rowsActionsEnum.filterByInvestment:
      return {
        ...state,
        filteredRows: state.rows.filter((row) => row.type === 'investment'),
      };

    default:
      return state;
  }
};
