import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
