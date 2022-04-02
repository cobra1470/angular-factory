import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  private fromEventClick(): void {
    fromEvent(document, 'click')
      .pipe(
        map(event => `Event time: ${event.timeStamp}`)
      ).subscribe(val => consoleHTML('#console-box', 'error')({label: 'fromString', value: val}))
  }

  ngOnInit(): void {
    this.fromEventClick();
  }
}
