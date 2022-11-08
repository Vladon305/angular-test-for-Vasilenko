import { Action } from '@ngrx/store';

export enum rowsActionsEnum {
  filterByIncome = '[ROWS] filter by income',
  filterByOutcome = '[ROWS] filter by outcome',
  filterByLoan = '[ROWS] filter by loan',
  filterByInvestment = '[ROWS] filter by investment',
}

export class rowsFilterByIncomeAction implements Action {
  readonly type = rowsActionsEnum.filterByIncome;
}
export class rowsFilterByOutcomeAction implements Action {
  readonly type = rowsActionsEnum.filterByOutcome;
}
export class rowsFilterByLoanAction implements Action {
  readonly type = rowsActionsEnum.filterByLoan;
}
export class rowsFilterInvestmentAction implements Action {
  readonly type = rowsActionsEnum.filterByInvestment;
}

export type rowsActions =
  | rowsFilterByIncomeAction
  | rowsFilterByOutcomeAction
  | rowsFilterByLoanAction
  | rowsFilterInvestmentAction;
