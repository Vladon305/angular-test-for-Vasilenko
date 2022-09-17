import { Component, Input, OnInit } from '@angular/core';
import { IRow } from 'src/app/models/row';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent {
  @Input() user: IRow;
}
