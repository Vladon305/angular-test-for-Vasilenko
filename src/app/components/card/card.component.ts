import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRow } from 'src/app/models/row';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() quantity: number;
  @Input() title: string;
  @Input() text: string;
  @Input() type: IRow['type'];
  @Input() tabNumber: number;

  constructor(private router: Router) {}

  goToTab() {
    this.router.navigateByUrl(`navigator?tab=${this.tabNumber}`);
  }
}
