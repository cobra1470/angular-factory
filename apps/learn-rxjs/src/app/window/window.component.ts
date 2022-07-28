import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { mergeAll, scan, window } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  public testWindow(): void {
    const example = timer(0, 1000).pipe(window(interval(3000)));
    const count = example.pipe(scan((acc) => acc + 1, 0));

    count.subscribe(value => consoleHTML('#console-box')({label: 'Window', value}));
    example.pipe(mergeAll())
      .subscribe(value => consoleHTML('#console-box')({label: 'item', value}))
  }

  ngOnInit(): void {
    this.testWindow();
  }
}
