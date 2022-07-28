import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { delayWhen, map, retryWhen, take, tap } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {
  private retryWhenDelay(): void {
    interval(1000).pipe(
      map(val => {
        if (val > 5) {
          throw val;
        }
        return val;
      }),
      retryWhen(errors => {
        return errors.pipe(
          tap(val => consoleHTML('#console-box', 'error')({label: 'errors', value: `Value ${val} was too high!`})),
          delayWhen(val => timer(val * 1000))
        )
      }),
      take(7)
    ).subscribe(value => consoleHTML('#console-box')({label: 'retryWhen', value}))
  }

  ngOnInit(): void {
    this.retryWhenDelay();
  }

}
