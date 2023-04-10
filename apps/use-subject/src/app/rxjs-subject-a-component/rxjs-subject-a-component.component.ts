import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'factory-rxjs-subject-a-component',
  templateUrl: './rxjs-subject-a-component.component.html',
  styleUrls: ['./rxjs-subject-a-component.component.scss'],
})
export class RxjsSubjectAComponentComponent implements OnInit {
  constructor(private messageServiceService: MessageServiceService) {}

  public shareData(): void {
    this.messageServiceService.sendData('This message from subject A.')
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.messageServiceService.updateBehaviorSubject('This message from subject A by BehaviorSubject.')
    }, 1000);

    setTimeout(() => {
      this.messageServiceService.sendReplaySubject();
    }, 1000);

    setTimeout(() => {
      this.messageServiceService.sendAsyncSubject();
    }, 1000);
  }
}
