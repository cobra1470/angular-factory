import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'factory-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private createValues(): void {
    Observable.create((observer: Observer<string>) => {
      observer.next('Hello');
      observer.next('world');
    }).subscribe((val: string) => console.log('createValues -', val));
  }

  private createInterval(): void {
    const evenNumbers = Observable.create((observer: Observer<number>) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });

    const subscribe = evenNumbers.subscribe((val: number) => console.log('createInterval -', val));

    setTimeout(() => {
      subscribe.unsubscribe();
    }, 5000);
  }

  ngOnInit(): void {
    this.createValues();
    this.createInterval();
  }
}
