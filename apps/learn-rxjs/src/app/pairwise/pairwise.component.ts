import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { pairwise, take } from 'rxjs/operators';

@Component({
  selector: 'factory-app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.css']
})
export class pairwiseComponent implements OnInit {

  ngOnInit(): void {
    interval(500)
      .pipe(
        pairwise(),
        take(5)
      )
      .subscribe(console.log)
  }

}
