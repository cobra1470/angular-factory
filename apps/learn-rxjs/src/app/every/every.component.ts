import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { every } from 'rxjs/operators';

@Component({
  selector: 'factory-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  private everyFalse(): void {
    of(1, 2, 3).pipe(
      every(val => val % 2 === 0)
    ).subscribe(val => console.log('everyFalse -', val));
  }

  private everyTrue(): void {
    of(2, 4, 6).pipe(
      every(val => val % 2 === 0)
    ).subscribe(val => console.log('everyTrue -', val));
  }

  ngOnInit(): void {
    this.everyFalse();
    this.everyTrue();
  }
}
