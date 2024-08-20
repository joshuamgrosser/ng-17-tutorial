import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { AlertsComponent } from '../../alerts/alerts.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [AlertsComponent, RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.less',
})
export class SingleProductComponent {
  @Input() product!: Product;

  shareProduct() {
    window.alert(`${this.product.name} has been shared!`);
  }

  onNotify() {
    window.alert(`You will be notified when ${this.product.name} goes on sale`);
  }
}
