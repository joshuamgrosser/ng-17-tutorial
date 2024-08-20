// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './productDetails/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent,
  },
];
