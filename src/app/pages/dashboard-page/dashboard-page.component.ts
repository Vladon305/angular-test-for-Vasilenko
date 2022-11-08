import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRow } from 'src/app/models/row';
import { RowsState } from 'src/app/reducers/rows/initialState';
import { selectRows } from 'src/app/reducers/rows/rows.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private store$: Store<RowsState>) {}

  rows$: Observable<IRow[]> = this.store$.pipe(select(selectRows));
  incomeRows: IRow[];
  outcomeRows: IRow[];
  loanRows: IRow[];
  investmentRows: IRow[];

  ngOnInit(): void {
    this.rows$.subscribe((rows) => {
      this.incomeRows = this.filter('income', rows);
      this.outcomeRows = this.filter('outcome', rows);
      this.loanRows = this.filter('loan', rows);
      this.investmentRows = this.filter('investment', rows);
    });
  }

  filter(type: IRow['type'], arr: IRow[]) {
    return arr.filter((row) => row.type === type);
  }
}
