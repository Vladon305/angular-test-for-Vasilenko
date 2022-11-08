import { Component, Input } from '@angular/core';
import { IRow } from 'src/app/models/row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  @Input() row: IRow;
}
