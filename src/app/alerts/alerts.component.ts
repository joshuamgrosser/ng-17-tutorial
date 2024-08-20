import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [NgIf],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.less',
})
export class AlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<any> = new EventEmitter();
}
