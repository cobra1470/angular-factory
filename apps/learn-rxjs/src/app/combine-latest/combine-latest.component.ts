import { Component, OnInit } from '@angular/core';
import { combineLatest, fromEvent, timer } from 'rxjs';
import { map, mapTo, scan, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'default-angular-factory-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  
  constructor() { }

  // 函数柯理化
  public setHtml$(id: string): any {
    return (val: string): any => (document.getElementById(id)!.innerHTML = val)
  }
  
  public runInstance(): void {
    const timerOne = timer(1000, 4000);
    const timerTwo = timer(2000, 4000);
    const timerThree = timer(3000, 4000);

    /* const combined = combineLatest(timerOne, timerTwo, timerThree);
    const subscribe = combined.subscribe(latestValues => {
      const [timerValOne, timerValTwo, timerValThree] = latestValues;

      console.log(`Timer One Latest: ${timerValOne}, Timer Two Latest: ${timerValTwo}, Timer Three Latest: ${timerValThree}`);
    }); */

    const combinedProject = combineLatest(timerOne, timerTwo, timerThree, (one, two, three) => {
      return `Timer One (Proj) Latest: ${one}, Timer Two (Proj) Latest: ${two}, Timer Three (Proj) Latest: ${three}`;
    });
    
    combinedProject.subscribe(latestValuesProject => {
      console.log(latestValuesProject);
    });
  }

  public runButtonClickInstance(): void {
    const setHtml = (id: string): any => (val: string): any => (document.getElementById(id)!.innerHTML = val);

    const addOneClick$ = (id: string): any => {
      return fromEvent(document.getElementById(id)!, 'click').pipe(
        mapTo(1),
        startWith(0),
        scan((acc: number, curr: number) => acc + curr),
        tap(setHtml(`${id}Total`))
      )
    }

    combineLatest(addOneClick$('red'), addOneClick$('black'))
      .pipe(map(([val1, val2]) => Number(val1) + Number(val2)))
      .subscribe(setHtml('total'))
  }

  ngOnInit(): void {
    // this.runInstance();
    this.runButtonClickInstance();

    // 柯理化函数 调用
    const testBox = this.setHtml$('test-box');
    testBox('This is a test box.');
  }
}
