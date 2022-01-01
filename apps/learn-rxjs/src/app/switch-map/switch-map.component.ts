import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  public runObservableList(): void {
    const obs1 = interval(1000).pipe(
      map(val => `obs1 --> ${val}`),
      take(5)
    );
    const obs2 = interval(500).pipe(
      map(val => `obs2 --> ${val}`),
      take(3)
    );
    const obs3 = interval(2000).pipe(
      map(val => `obs3 --> ${val}`),
      take(4)
    );

    const source = of(obs1, obs2, obs3);
    const example = source.pipe(switchMap(val => val));

    example.subscribe(val => {
      console.log(val);
    });
  }

  ngOnInit(): void {
    this.runObservableList()
  }

}
