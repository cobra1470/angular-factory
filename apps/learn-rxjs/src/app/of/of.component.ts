import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  private of(): void {
    of(1, [4, 5, 6], {name: 'cobra'}, () => {
      return 'Hello';
    }).subscribe(val => consoleHTML('#console-box')({label: 'of', value: val})) 
  }

  ngOnInit(): void {
    this.of();
  }
}
