import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user';
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
export class MainPageComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private store$: Store<UsersState>
  ) {}

  users$: Observable<IUser[]> = this.store$.pipe(select(selectUsers));
  filteredUsers$: Observable<IUser[]> = this.store$.pipe(
    select(selectFilteredUsers)
  );

  tabParam: number = 0;

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.tabParam = params['tab'];
    });
  }
}
