import { Component, OnInit } from '@angular/core';
import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'default-angular-factory-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  constructor() { }

  public runInstance(): void {
    const source = interval(1000).pipe(take(2));
    /**
     * 将 source 的值拍平成两条时间线
     * --0,0--0,1--0,2--0,3--0,4
     * --1,0--1,1--1,2--1,3--1,4
     */
    const example = source.pipe(
      map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(3)))
    );
    /**
     * 两条时间线交替进行
     * -- --
     * 0,0 1,0
     * 
     * 0,1 1,0
     * 0,1 1,1
     * 
     * 0,2 1,1
     * 0,2 1,2
     */
    const combined = example.pipe(combineAll());

    combined.subscribe(val => console.log(val));
  }

  ngOnInit(): void {
    this.runInstance();
  }
}
