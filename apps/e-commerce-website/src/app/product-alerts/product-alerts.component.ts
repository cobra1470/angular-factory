import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'factory-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
