import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { delay, map, mergeAll, publishLast, take } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements OnInit {
  public myHtml = "<a href='www.baidu.com'>test</a>";
  constructor() { }

  public myPromise(val: any): any {
    return new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
  }

  public runPromiseInstance(): void {
    const source = of(1, 2, 3);

    const example = source.pipe(
      map(val => this.myPromise(val)),
      mergeAll()
    );

    example.subscribe(val => console.log(val)); 
  }

  public runConcurrentInstance(): void {
    const source = interval(500).pipe(take(5));

    const example = source.pipe(
      map((val1) => {
        return source.pipe(
          delay(1000),
          take(2),
          map(val => val1 + '/' + val)
        )
      }),
      mergeAll()
    ).subscribe(val => console.log(val));

    /* source.pipe(
    ).subscribe(val => console.log(val)) */

    // 0/0

    // 1/0
    // 0/1

    // 1/1
    // 2/0

    // 2/1
    // 3/0

    // 3/1
    // 4/0

    // 4/1


    // --0/0--0/1--0/2
    // --1/0--1/1--1/2
    // --2/0--2/1--2/2
    // --3/0--3/1--3/2
    // --4/0--4/1--4/2

  }

  ngOnInit(): void {
    // this.runPromiseInstance();
    this.runConcurrentInstance();
  }

}