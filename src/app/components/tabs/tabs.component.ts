import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { RowsState } from 'src/app/reducers/rows/initialState';
import {
  rowsFilterByIncomeAction,
  rowsFilterByOutcomeAction,
  rowsFilterByLoanAction,
  rowsFilterInvestmentAction,
} from 'src/app/reducers/rows/rows.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(
    private store$: Store<RowsState>,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onFilterByIncome();
    this.router.queryParams.subscribe((params) => {
      const param = params['tab'];
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
    this.store$.dispatch(new rowsFilterByIncomeAction());
  }

  onFilterByOutcome() {
    this.store$.dispatch(new rowsFilterByOutcomeAction());
  }

  onFilterByLoan() {
    this.store$.dispatch(new rowsFilterByLoanAction());
  }

  onFilterByInvestment() {
    this.store$.dispatch(new rowsFilterInvestmentAction());
  }
}
