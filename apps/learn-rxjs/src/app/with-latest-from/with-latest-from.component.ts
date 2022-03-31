import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'factory-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {
  private withLatestFromFast(): void {
    const source = interval(5000);
    const secondSource = interval(1000);

    source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} -- Second Source (1s): ${second}`;
      }),
      take(3)
    ).subscribe(val => console.log('withLatestFromFast -', val));
  }

  private withLatestFromSlow(): void {
    const source = interval(5000);
    const secondSource = interval(1000);

    secondSource.pipe(
      withLatestFrom(source),
      map(([first, second]) => {
        return `Source (1s): ${first} -- Latest From (5s): ${second}`;
      }),
      take(6)
    ).subscribe(val => console.log('withLatestFromSlow -', val));
  }

  ngOnInit(): void {
    this.withLatestFromFast();
    this.withLatestFromSlow();
  }

}
