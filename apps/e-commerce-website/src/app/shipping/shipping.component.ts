import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'default-angular-factory-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  public shippingCosts = this.cartService.getShippingPrices();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
