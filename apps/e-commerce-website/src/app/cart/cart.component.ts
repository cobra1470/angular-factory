import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'default-angular-factory-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items = this.cartService.getItems();
  public checkoutForm!: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }
  
  public onSubmit():void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: [''],
      address: ['']
    });
  }

}
