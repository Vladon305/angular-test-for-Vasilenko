import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private store$: Store<UsersState>,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onFilterByIncome();
    this.router.queryParams.subscribe((params) => {
      const param = params['tab'];
      console.log(param);

      if (param === '0') {
        this.onFilterByIncome();
      }
      if (param === '1') {
        this.onFilterByOutcome();
      }
      if (param === '2') {
        this.onFilterByLoan();
      }
      if (param === '3') {
        this.onFilterByInvestment();
      }
    });
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
