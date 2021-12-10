import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public addToCart(product: Product):void {
    this.items.push(product);
  }

  public getItems():Product[] {
    return this.items;
  }

  public clearCart():Product[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
