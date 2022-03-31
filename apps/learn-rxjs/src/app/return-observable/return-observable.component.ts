import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'factory-app-return-observable',
  templateUrl: './return-observable.component.html',
  styleUrls: ['./return-observable.component.css']
})
export class ReturnObservableComponent implements OnInit {

  constructor() { }

  public getNumers(): Observable<number> {
    const source = of(1, 2, 3, 4);
    return source.pipe(map(val => {
      return val + 1;
    }));
  }

  ngOnInit() {
    this.getNumers()
      .subscribe(val => console.log(val))
  }
}
