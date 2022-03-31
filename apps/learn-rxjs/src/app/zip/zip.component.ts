import { Component, OnInit } from '@angular/core';
import { interval, of, zip } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

@Component({
  selector: 'factory-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  private zipMultiple(): void {
    zip(
      of('Hello'),
      of('world!').pipe(delay(1000)),
      of('goodbye').pipe(delay(2000)),
      of('world!').pipe(delay(1500)),
    ).subscribe(val => console.log('zipMultiple -', val));
  }

  private zipSingle(): void {
    const source = interval(1000);

    zip(
      source,
      source.pipe(map(val => val + 1), take(3))
    ).subscribe(val => console.log('zipSingle -', val));
  }

  ngOnInit(): void {
    this.zipMultiple();
    this.zipSingle();
  }
}
