import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from 'src/app/reducers/users/initialState';
import {
  UsersFilterByIncomeAction,
  UsersFilterByLoanAction,
  UsersFilterByOutcomeAction,
  UsersFilterInvestmentAction,
} from 'src/app/reducers/users/users.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(private store$: Store<UsersState>) {}

  ngOnInit(): void {
    this.onFilterByIncome();
  }

  onFilterByIncome() {
    this.store$.dispatch(new UsersFilterByIncomeAction());
  }

  onFilterByOutcome() {
    this.store$.dispatch(new UsersFilterByOutcomeAction());
  }

  onFilterByLoan() {
    this.store$.dispatch(new UsersFilterByLoanAction());
  }

  onFilterByInvestment() {
    this.store$.dispatch(new UsersFilterInvestmentAction());
  }
}
