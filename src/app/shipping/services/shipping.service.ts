import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../../models/shipping';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  constructor(private http: HttpClient) {}

  getShippingPrices(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>('../../assets/shipping.json');
  }
}
