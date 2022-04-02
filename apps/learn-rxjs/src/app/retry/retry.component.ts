import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  private retry(): void {
    interval(1000).pipe(
      mergeMap(val => {
        if (val > 3) {
          return throwError('Error!');
        }
        return of(val);
      }),
      retry(2)
    ).subscribe({
      next: value => consoleHTML('#console-box')({label: 'retry', value}),
      error: value => consoleHTML('#console-box', 'error')({label: 'retry', value: `${value}: Retried 2 times then quit!`})
    })
  }

  ngOnInit(): void {
    this.retry();
  }
}
