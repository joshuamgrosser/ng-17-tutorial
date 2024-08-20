import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../models/product';
import { AlertsComponent } from '../alerts/alerts.component';
import { SingleProductComponent } from './product/single-product.component';
import { products } from '../data/product-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgForOf, NgIf, AlertsComponent, SingleProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.less',
})
export class ProductsComponent {
  products: Product[] = products;
}
