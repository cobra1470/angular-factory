import { Component, OnInit } from '@angular/core';
import { from, of, timer } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  private catchError(): void {
    const badPromise = () => new Promise((_, reject) => reject('Rejected!'));

    timer(1000).pipe(
      mergeMap(() => {
        return from(badPromise()).pipe(
          catchError(error => of(`Bad Promise: ${error}`))
        )
      })
    ).subscribe(value => consoleHTML('#console-box', 'error')({label: 'catchError', value}))
  }

  ngOnInit(): void {
    this.catchError();
  }
}
