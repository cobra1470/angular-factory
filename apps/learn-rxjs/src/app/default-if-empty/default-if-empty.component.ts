import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'factory-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.scss']
})
export class DefaultIfEmptyComponent implements OnInit {
  private defaultIfEmpty(): void {
    EMPTY.pipe(
      defaultIfEmpty('Observable.of() Empty!')
    ).subscribe(val => console.log('defaultIfEmpty -', val));
  }

  ngOnInit(): void {
    this.defaultIfEmpty();
  }
}
