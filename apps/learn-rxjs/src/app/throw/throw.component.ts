import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { consoleHTML } from '../utils/utils';

@Component({
  selector: 'factory-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.scss']
})
export class ThrowComponent implements OnInit {
  private throw(): void {
    throwError('This is an error!').subscribe({
      next: value => consoleHTML('#console-box')({label: 'next', value}),
      complete: () => consoleHTML('#console-box')({label: 'complete', value: 'complete!'}),
      error: value => consoleHTML('#console-box', 'error')({label: 'error', value})
    })
  }

  ngOnInit(): void {
    this.throw();
  }
}
