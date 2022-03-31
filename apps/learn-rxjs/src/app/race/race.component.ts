import { Component, OnInit } from '@angular/core';
import { interval, of, race } from 'rxjs';
import { delay, map, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'factory-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  private normalRace(): void {
    const example = race(
      interval(1500),
      interval(1000).pipe(mapTo('1s won!'), take(1)),
      interval(2000),
      interval(2500)
    )

    example.subscribe(console.log);
  }

  private errorRace(): void {
    const first = of('first').pipe(
      delay(100),
      map(_ => {
        throw 'error';
      })
    );
    const second = of('second').pipe(delay(200));
    const third = of('third').pipe(delay(300));

    race(first, second, third).subscribe(console.log);
  }

  ngOnInit(): void {
    this.normalRace();
    this.errorRace();
  }
}
