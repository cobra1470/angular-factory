import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  private range(): void {
    range(1, 10).subscribe(value => consoleHTML('#console-box')({label: 'range', value}))
  }

  ngOnInit(): void {
    this.range();
  }

}
