import { Component, ElementRef, OnInit } from '@angular/core';
import { EMPTY, fromEvent, interval, merge } from 'rxjs';
import { mapTo, scan, startWith, switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'factory-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  constructor(private el:ElementRef) {}

  private emptyNormal(): void {
    EMPTY.subscribe({
      next: () => console.log('Next'),
      complete: () => console.log('Complete!')
    })
  }

  private emptyInterval(): void {
    const countdownSeconds = 10;
    const setHTML = (selector: string) => (val: number) => (this.el.nativeElement.querySelector(selector).innerHTML = val);
    const pauseButton = this.el.nativeElement.querySelector('#pause');
    const resumeButton = this.el.nativeElement.querySelector('#resume');

    const interval$ = interval(1000).pipe(mapTo(-1));
    
    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    merge(pause$, resume$)
      .pipe(
        startWith(true),
        switchMap(val => (val ? interval$ : EMPTY)),
        scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
        takeWhile(v => v >= 0)
      ).subscribe(val => setHTML('#remaining')(val));
  }

  ngOnInit(): void {
    this.emptyNormal();
    this.emptyInterval();
  }
}
