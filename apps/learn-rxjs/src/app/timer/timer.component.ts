import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private timer(): void {
    timer(500, 1000).pipe(
      take(6)
    ).subscribe(value => consoleHTML('#console-box')({label: 'timer', value}))
  }

  ngOnInit(): void {
    this.timer();
  }
}
