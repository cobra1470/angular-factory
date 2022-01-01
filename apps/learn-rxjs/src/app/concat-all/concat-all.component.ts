import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {

  constructor() { }

  public runBasicInstance(): void {
    const source = interval(2000);
    const example = source.pipe(
      map(val => of(val + 10)),
      concatAll()
    );

    example.subscribe(val => {
      console.log(`With Basic Observable: ${val}`)
    });
  }

  public runPromiseInstance(): void {
    const samplePromise = (val: any) => new Promise(resolve => resolve(val));
    const source = interval(2000);
    const example = source.pipe(
      map(val => samplePromise(val)),
      concatAll()
    );

    example.subscribe(val => {
      console.log(`With Promise: ${val}`);
    });
  }

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
      take(1)
    );

    const source = of(obs1, obs2, obs3);
    const example = source.pipe(concatAll());

    example.subscribe(val => {
      console.log(val);
    });
  }


  ngOnInit(): void {
    // this.runBasicInstance();
    // this.runPromiseInstance();
    this.runObservableList();
  }
}
