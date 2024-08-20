import { ApplicationModule, Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { CurrencyPipe, NgIf } from '@angular/common';
import { products } from '../data/product-data';
import { CartService } from '../cart/service/cart.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    AlertsComponent,
    RouterLink,
    NgIf,
    CurrencyPipe,
    HttpClientModule,
    ApplicationModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute,
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to your cart!`);
  }
}
