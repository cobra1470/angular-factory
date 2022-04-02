import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  private fromArray(): void {
    from([1, 2, 3, 4])
      .subscribe(val => consoleHTML('#wrapper')({label: 'fromArray', value: val}));
  }

  private fromPromise(): void {
    from(new Promise(resolve => resolve('Hello world!')))
      .subscribe(val => consoleHTML('#wrapper')({label: 'fromPromise', value: val}))
  }

  private fromMap(): void {
    const map = new Map();

    map.set(1, 'Hi');
    map.set(2, 'Bye');
    from(map)
      .subscribe(val => consoleHTML('#wrapper')({label: 'fromMap', value: val}))
  }

  private fromString(): void {
    from('Hello')
      .subscribe(val => consoleHTML('#wrapper')({label: 'fromString', value: val}))
  }

  ngOnInit(): void {
    this.fromArray();
    this.fromPromise();
    this.fromMap();
    this.fromString();
  }
}
