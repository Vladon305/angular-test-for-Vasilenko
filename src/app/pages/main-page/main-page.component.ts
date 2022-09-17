import { Component } from '@angular/core';
import { IRow } from '../../models/row';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersState } from 'src/app/reducers/users/initialState';
import {
  selectFilteredUsers,
  selectUsers,
} from 'src/app/reducers/users/users.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private store$: Store<UsersState>) {}

  users$: Observable<IRow[]> = this.store$.pipe(select(selectUsers));
  filteredUsers$: Observable<IRow[]> = this.store$.pipe(
    select(selectFilteredUsers)
  );
}
