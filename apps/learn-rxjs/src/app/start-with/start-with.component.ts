import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { scan, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'factory-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  private startWithNumber(): void {
    const example = of(1, 2, 3).pipe(startWith(0));

    example.subscribe(val => console.log('startWithNumber -', val));
  }

  private startWithScan(): void {
    of('world!', 'goodbye', 'world!').pipe(
      startWith('Hello'),
      scan((acc, curr) => `${acc} ${curr}`)
    ).subscribe(val => console.log('startWithScan -', val));
  }

  private startWithMultiple(): void {
    interval(1000).pipe(
      take(3),
      startWith(-3, -2, -1),
    ).subscribe(val => console.log('startWithMultiple -', val));
  }

  ngOnInit(): void {
    this.startWithNumber();
    this.startWithScan();
    this.startWithMultiple();
  }
}
