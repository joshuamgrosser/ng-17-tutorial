import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../models/shipping';
import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShippingService } from './services/shipping.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [NgForOf, AsyncPipe, CurrencyPipe, HttpClientModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.less',
  providers: [ShippingService],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<Shipping[]>;

  constructor(private shippingService: ShippingService) {}

  ngOnInit() {
    this.shippingCosts = this.shippingService.getShippingPrices();
  }
}
