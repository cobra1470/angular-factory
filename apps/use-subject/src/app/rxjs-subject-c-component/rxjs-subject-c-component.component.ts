import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'factory-rxjs-subject-c-component',
  templateUrl: './rxjs-subject-c-component.component.html',
})
export class RxjsSubjectCComponentComponent implements OnInit {
  public asyncSubjectData: number | null = null;
  public behaviorSubjectArray: string[] = [];
  public replaySubjectArray: number[] = [];
  public sharedDataArray: string[] = [];

  constructor(private messageServiceService: MessageServiceService) {}

  ngOnInit(): void {
    this.messageServiceService.getData().subscribe(data => {
      this.sharedDataArray.push(data);
    });

    this.messageServiceService.currentBehaviorSubject.subscribe(data => {
      this.behaviorSubjectArray.push(data);
    });

    this.messageServiceService.getReplaySubject().subscribe(data => {
      this.replaySubjectArray.push(data);
    });

    this.messageServiceService.getAsyncSubject().subscribe(data => {
      this.asyncSubjectData = data;
    });
  }
}
