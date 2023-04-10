import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'factory-rxjs-subject-b-component',
  templateUrl: './rxjs-subject-b-component.component.html',
})
export class RxjsSubjectBComponentComponent implements OnInit {
  public asyncSubjectData: number | null = null;
  public behaviorSubjectArray: string[] = [];
  public replaySubjectArray: number[] = [];
  public sharedDataArray: string[] = [];

  constructor(private messageServiceService: MessageServiceService) {}

  ngOnInit(): void {
    this.messageServiceService.getData().subscribe(data => {
      this.sharedDataArray.push(data);
    });

    setTimeout(() => {
      this.messageServiceService.currentBehaviorSubject.subscribe(data => {
        this.behaviorSubjectArray.push(data);
      });
    }, 3000);

    setTimeout(() => {
      this.messageServiceService.getReplaySubject().subscribe(data => {
        this.replaySubjectArray.push(data);
      });
    }, 4000);

    setTimeout(() => {
      this.messageServiceService.getAsyncSubject().subscribe(data => {
        this.asyncSubjectData = data;
      });
    }, 5000);
  }
}
