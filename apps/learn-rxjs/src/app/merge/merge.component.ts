import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() { }

  public runBasicInstance(): void {
    const first = interval(3000);
    const second = interval(1000);
    const third = interval(2000);
    const fourth = interval(1000);

    const example = merge(
      first.pipe(mapTo('FIRST!'), take(1)),
      second.pipe(mapTo('SECOND!'), take(1)),
      third.pipe(mapTo('THIRD!'), take(1)),
      fourth.pipe(mapTo('FOURTH!'), take(1)),
    );

    example.subscribe(val => console.log(val));
  }

  ngOnInit(): void {
    this.runBasicInstance();
  }

}
