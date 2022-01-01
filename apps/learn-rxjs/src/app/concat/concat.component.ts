import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concat, delay, take } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  public runBasicInstance(): void {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    const example = sourceOne.pipe(concat(sourceTwo));
    example.subscribe(val => {
      console.log(`Basic concat: ${val}`);
    });
  }

  public runDelayedInstance(): void {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    const sourceThree = sourceOne.pipe(delay(2000));
    const example = sourceThree.pipe(concat(sourceTwo));

    example.subscribe(val => {
      console.log(`Delayed souceOne: ${val}`);
    });
  }

  public runNeverCompleteInstance(): void {
    const sourceOne = interval(1000);
    const sourceTwo = of('This', 'Never', 'Runs');

    sourceOne.pipe(concat(sourceTwo))
      .subscribe(val => console.log('Example: Source never completes, second observable never runs:', val));
  }

  ngOnInit(): void {
    // this.runBasicInstance();
    // this.runDelayedInstance();

    this.runNeverCompleteInstance();
  }
}
