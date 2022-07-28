import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
  public testDebounceTime(): void {
    const input = document.getElementById('input-debounce');
    const example = input ? fromEvent(input, 'keyup').pipe(map(i => (i.currentTarget as HTMLTextAreaElement).value)) : null;

    example?.pipe(debounceTime(500))
      .subscribe(value => consoleHTML('#console-box')({label: 'debounceTime', value}))
  }

  ngOnInit(): void {
    this.testDebounceTime();
  }

}
