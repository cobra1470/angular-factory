import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, of, throwError } from 'rxjs';
import { catchError, delay, switchMap, take } from 'rxjs/operators';
import { ForkJoinService } from './fork-join.service';

@Component({
  selector: 'default-angular-factory-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  public propOne: string | unknown;
  public propTwo: string | unknown;
  public propThree: string | unknown;

  constructor(
    private forkJoinService: ForkJoinService
  ) { }

  public myPromise = (val: any) => {
    console.log(val)
    return new Promise(resolve => 
      setTimeout(() => resolve(`Promise Resolved: ${val}`), 500)
    );
  }

  public runDifferentTimerObservablesInstance(): void {
    const example = forkJoin(
      of('Hello'),
      of('World').pipe(delay(1000)),
      interval(1000).pipe(take(1)),
      interval(1000).pipe(take(3)),
      this.myPromise('RESULT')
    );

    example.subscribe(val => console.log(val));
  }

  public runMultipleRequestsInstance(): void {
    const source = of([1, 2, 3, 4, 5]);
    const example = source.pipe(switchMap(q => forkJoin(...q.map(this.myPromise))));

    example.subscribe(val => console.log(val));
  }

  public runHandlingErrorsExternallyInstance(): void {
    const example = forkJoin(
      of('Hello'),
      of('world').pipe(delay(1000)),
      throwError('This will error.')
    ).pipe(catchError(error => of(error)));

    example.subscribe(val => console.log(val));
  }

  public runHandlingErrorsInternallyInstance(): void {
    const example = forkJoin(
      of('Hello'),
      of('world').pipe(delay(2000)),
      throwError('This will error.').pipe(catchError(error => of(error)))
    );

    example.subscribe(val => console.log(val));
  }

  public runMultipleRequestsInstance2(): void {
    forkJoin(
      this.forkJoinService.makeRequest('Request One', 2000),
      this.forkJoinService.makeRequest('Request Two', 1000),
      this.forkJoinService.makeRequest('Request Three', 3000),
    )
    .subscribe(([res1, res2, res3]): void => {
      this.propOne  = res1;
      this.propTwo  = res2;
      this.propThree  = res3;
    });
  }

  ngOnInit(): void {
    // this.runDifferentTimerObservablesInstance();
    // this.runMultipleRequestsInstance();
    // this.runHandlingErrorsExternallyInstance();
    // this.runHandlingErrorsInternallyInstance();
    this.runMultipleRequestsInstance2();
  }
}

