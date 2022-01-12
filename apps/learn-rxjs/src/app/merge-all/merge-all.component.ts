import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'default-angular-factory-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements OnInit {
  public myHtml = "<a href='www.baidu.com'>test</a>";
  constructor() { }

  public runPromiseInstance(): void {
    
  }

  ngOnInit(): void {
  }

}
