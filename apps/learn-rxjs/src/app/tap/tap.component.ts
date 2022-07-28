import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  private testTap(): void {
    const source = of(1, 2, 3, 4, 5);

    source.pipe(
      // tap(val => `BEFORE MAP: ${val}`),
      tap(value => consoleHTML('#console-box')({label: 'BEFORE MAP', value})),
      map(val => val),
      // tap(val => `AFTER MAP: ${val}`)
      tap(value => consoleHTML('#console-box')({label: 'AFTER MAP', value}))
    ).subscribe(value => consoleHTML('#console-box')({label: 'value', value}))
  }

  ngOnInit(): void {
    this.testTap();
  }
}
