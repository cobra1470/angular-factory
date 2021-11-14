import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { isObjectLike } from 'lodash';

@Component({
  selector: 'webx-select-language',
  templateUrl: './webx-select-language.component.html',
  styleUrls: ['./webx-select-language.component.css']
})
export class WebxSelectLanguageComponent implements OnInit {
  @Input() tips: string | undefined; // Tips for lang select, if no tips show full-column select style
  @Input() currentLang: string | object = {};
  @Input() options: Array<any> = [];
  @Input() immediate: boolean = true; // Execute a lang change immediately
  @Output() changeLang = new EventEmitter<string | object>();


  constructor() { }
  
  ngOnInit() {
    // test data
    this.currentLang = '2';
    this.options = [
      {
        label: 'CN',
        value: '1'
      },
      {
        label: 'EN',
        value: '2'
      },
      {
        label: 'CG',
        value: '3'
      },
    ]

    // Execute a lang change immediately
    // this.immediate && this.changeLang.emit(this.currentLang);
  }

  // public getCurrrentLang() {
  //   if (!isObjectLike(this.currentLang)) {
  //     for (let i = 0; i < this.options.length; i++) {
  //       if (this.options[i].value === this.currentLang) {
  //         this.currentLang = this.options[i];
  //         break;
  //       }
  //     }
  //   }
  //   return this.currentLang;
  // }

  public changeSelect():void {
    // this.changeLang.emit(this.getCurrrentLang());
  }
}