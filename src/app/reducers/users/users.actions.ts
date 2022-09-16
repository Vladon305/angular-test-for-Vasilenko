import { Action } from '@ngrx/store';

export enum usersActionsEnum {
  filterByIncome = '[USERS] filter by income',
  filterByOutcome = '[USERS] filter by outcome',
  filterByLoan = '[USERS] filter by loan',
  filterByInvestment = '[USERS] filter by investment',
}

export class UsersFilterByIncomeAction implements Action {
  readonly type = usersActionsEnum.filterByIncome;
}
export class UsersFilterByOutcomeAction implements Action {
  readonly type = usersActionsEnum.filterByOutcome;
}
export class UsersFilterByLoanAction implements Action {
  readonly type = usersActionsEnum.filterByLoan;
}
export class UsersFilterInvestmentAction implements Action {
  readonly type = usersActionsEnum.filterByInvestment;
}

export type UsersActions =
  | UsersFilterByIncomeAction
  | UsersFilterByOutcomeAction
  | UsersFilterByLoanAction
  | UsersFilterInvestmentAction;
