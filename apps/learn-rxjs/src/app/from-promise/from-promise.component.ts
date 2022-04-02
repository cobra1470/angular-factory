import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-from-promise',
  templateUrl: './from-promise.component.html',
  styleUrls: ['./from-promise.component.scss']
})
export class FromPromiseComponent implements OnInit {
  private fromPromise(): void {
    const myPromise = (willReject: boolean) => {
      return new Promise((resolve, reject) => {
        willReject ? reject('Rejected!') : resolve('Resolved!')
      });
    }

    of(true, false).pipe(
      mergeMap(val => {
        return from(myPromise(val)).pipe(
          catchError(error => of(`Error: ${error}`))
        )
      })
    ).subscribe(val => {
      consoleHTML('#console-box', ((val as string).indexOf('Error:') > -1) ? 'error' : 'info')({label: 'fromPromise', value: val})
    })
  }

  ngOnInit(): void {
    this.fromPromise();
  }
}
