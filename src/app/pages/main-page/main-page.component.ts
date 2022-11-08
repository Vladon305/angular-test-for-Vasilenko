import { Component } from '@angular/core';
import { IRow } from '../../models/row';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RowsState } from 'src/app/reducers/rows/initialState';
import { selectFilteredRows } from 'src/app/reducers/rows/rows.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private store$: Store<RowsState>) {}

  filteredRows$: Observable<IRow[]> = this.store$.pipe(
    select(selectFilteredRows)
  );
}
